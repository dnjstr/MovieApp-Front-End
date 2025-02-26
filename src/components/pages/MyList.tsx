import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

interface Bookmark {
  id: number;
  movie: number;
  movie_title: string;
  movie_poster: string;
  movie_release_date: string;
  movie_director: string;
}

const MyList: React.FC = () => {
  const userToken = localStorage.getItem("token") || "";
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  if (!userToken) {
    return (
      <div className="flex flex-col justify-center items-center h-[788px] text-white">
        <p className="text-lg mb-4">You have no bookmarks.</p>
        <p className="text-gray-400">Please <Link to="/sign-in" className="text-orange-500 px-1 font-bold hover:text-orange-600 duration-300">sign in</Link> to add bookmarks.</p>
      </div>
    );
  }

  const {
    data: myList = [],
    isLoading,
    isError,
    refetch,
  } = useQuery<Bookmark[], Error>({
    queryKey: ["bookmarks", userToken],
    queryFn: async () => {
      const response = await axiosInstance.get("/bookmarks/", {
        headers: { Authorization: `Token ${userToken}` },
      });
      return response.data;
    },
    enabled: !!userToken,
    staleTime: 1000 * 60 * 5,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  const removeMutation = useMutation<void, Error, number>({
    mutationFn: async (movieId: number) => {
      const response = await axiosInstance.delete(`/bookmarks/remove/${movieId}/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${userToken}`,
        },
      });
      if (response.status < 200 || response.status >= 300) {
        throw new Error("Failed to remove bookmark");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookmarks", userToken] });
    },
  });

  if (isLoading) {
    return <p className="text-green-500 flex justify-center my-[382px]">Loading...</p>;
  }

  if (isError) {
    return <p className="text-red-500 flex justify-center my-[382px]">Error fetching bookmarks.</p>;
  }

  return (
    <div className={`flex flex-col txtlg:justify-between text-white px-6 mb-[152px] ${myList.length === 0 ? "h-[636px] pt-10" : ""}`}>
      <div className="flex flex-col txtlg:flex-row txtlg:justify-around txtlg:items-center gap-10 mt-10 txtlg:mt-24">
        <div className="text-center lg:flex-1">
          <h1 className="text-5xl font-bold mb-2 mt-12">My List</h1>
          <p className="text-lg text-gray-300 mb-6">
            Keep track of your favorite movies and shows here!
          </p>

          {/* Swiper Section */}
          <div className="flex justify-center mb-6">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              className="w-64"
            >
              {myList.map((item) => (
                <SwiperSlide key={item.id}>
                  <img
                    src={item.movie_poster}
                    alt={item.movie_title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="bookmark-scroll-bar txtlg:space-y-4 txtlg:mt-12 flex-auto overflow-y-scroll max-h-400">
          {myList.length === 0 ? (
            <p className="text-gray-400 flex justify-center p-48">
              No movies added yet.
            </p>
          ) : (
            myList.map((item) => (
              <div
                key={item.id}
                className="bookmark-item flex items-center p-4 rounded-lg border-s-2 border-orange-700"
              >
                <img
                  src={item.movie_poster}
                  alt={item.movie_title}
                  className="w-[80px] h-[120px] object-cover rounded-md mr-4"
                  onClick={() => navigate(`/movies/${item.movie}/`)}
                />
                <div
                  className="flex-grow cursor-pointer"
                  onClick={() => navigate(`/movies/${item.movie}/`)}
                >
                  <h2 className="text-lg font-bold">{item.movie_title}</h2>
                  <p className="text-gray-300 text-sm">
                    {item.movie_release_date} • Directed by: {item.movie_director}
                  </p>
                </div>
                <button
                  onClick={() => removeMutation.mutate(item.movie)}
                  className="text-white hover:text-red-900 text-xl ms-5"
                >
                  ✖
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyList;
