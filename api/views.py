from django.db.models import Count
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from api.models import Movie
from api.serializers import MovieSerializer
from rest_framework import viewsets

    @api_view(['GET'])
    @permission_classes([AllowAny])
    def get_genres(request):
        try:
            # Get all movies
            movies = Movie.objects.all()
            
            # Create a dictionary to store genre counts
            genre_counts = {}
            
            # Iterate through movies and split genres
            for movie in movies:
                # Split genres by comma and clean them
                genres = [g.strip().title() for g in movie.genre.split(',')]
                
                # Count each genre
                for genre in genres:
                    if genre:  # Only count non-empty genres
                        genre_counts[genre] = genre_counts.get(genre, 0) + 1
            
            # Convert to list of dictionaries and sort by genre name
            genre_data = [
                {
                    'genre': genre,
                    'count': count
                }
                for genre, count in genre_counts.items()
            ]
            
            # Sort alphabetically
            genre_data.sort(key=lambda x: x['genre'])
            
            return Response(genre_data)
        except Exception as e:
            print("Error in get_genres:", str(e))
            return Response({'error': str(e)}, status=500)

    @api_view(['GET'])
    @permission_classes([AllowAny])
    def movies_by_genre(request, genre):
        try:
            # Convert genre parameter to title case for consistency
            genre = genre.title()
            
            # Get all movies
            movies = Movie.objects.all()
            matching_movies = []
            
            # Filter movies that contain the specific genre
            for movie in movies:
                # Split genres and clean them
                movie_genres = [g.strip().title() for g in movie.genre.split(',')]
                
                # If the requested genre is in this movie's genres, include it
                if genre in movie_genres:
                    matching_movies.append(movie)
            
            # Print for debugging
            print(f"Looking for genre: {genre}")
            print(f"Found {len(matching_movies)} movies")
            
            serializer = MovieSerializer(matching_movies, many=True)
            return Response(serializer.data)
        except Exception as e:
            print(f"Error in movies_by_genre: {str(e)}")
            return Response({'error': str(e)}, status=500)

    class MovieViewSet(viewsets.ModelViewSet):
        queryset = Movie.objects.all()
        serializer_class = MovieSerializer
        permission_classes = [AllowAny]

        def get_queryset(self):
            queryset = Movie.objects.all()
            genre = self.request.query_params.get('genre', None)
            
            if genre:
                # Split the genre parameter in case it contains multiple genres
                genres = [g.strip().title() for g in genre.split(',')]
                matching_movies = []
                
                for movie in queryset:
                    movie_genres = [g.strip().title() for g in movie.genre.split(',')]
                    if any(g in movie_genres for g in genres):
                        matching_movies.append(movie)
                
                return matching_movies
            
            return queryset 