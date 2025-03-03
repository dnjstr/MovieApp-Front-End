import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { usePreferences } from "../../../context/PreferencesContext";
import BookmarkList from "./my-listComponents/BookmarkList";
import { useMyList, useRemoveFromMyList } from "../../../hooks/useMyList";

const MyList: React.FC = () => {
  const { textColor } = usePreferences();
  const userToken = localStorage.getItem("token") || "";
  const { data: myList = [], isLoading, isError, refetch } = useMyList(userToken);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  const removeMutation = useRemoveFromMyList(userToken);

  if (!userToken) {
    return (
      <div className={`flex flex-col justify-center items-center h-[788px] ${textColor}`}>
        <p className={`text-lg mb-4 ${textColor}`}>You have no bookmarks.</p>
        <p className={`${textColor}`}>
          Please{" "}
          <Link to="/sign-in" className="text-orange-500 px-1 font-bold hover:text-orange-600 duration-300">
            sign in
          </Link>{" "}
          to add bookmarks.
        </p>
      </div>
    );
  }

  if (isLoading) {
    return <p className="text-white flex justify-center my-[382px]">Loading...</p>;
  }

  if (isError) {
    return <p className="text-red-500 flex justify-center my-[382px]">Error fetching bookmarks.</p>;
  }

  return (
    <div className={`flex flex-col txtlg:justify-between ${textColor} px-6 mb-[130px] ${myList.length === 0 ? "h-[636px] pt-10" : ""}`}>
      <div className="flex flex-col txtlg:flex-row txtlg:justify-around txtlg:items-center gap-10 mt-10 txtlg:mt-24">
        <div className="text-center lg:flex-1">
          <h1 className="text-5xl font-bold mb-2 mt-12">My List</h1>
          <p className={`text-lg ${textColor} mb-6`}>Keep track of your favorite movies and shows here!</p>

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
                  <img src={item.movie_poster} alt={item.movie_title} className="w-full h-full object-cover rounded-lg" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <BookmarkList bookmarks={myList} textColor={textColor} onRemove={removeMutation.mutate} />
      </div>
    </div>
  );
};

export default MyList;
