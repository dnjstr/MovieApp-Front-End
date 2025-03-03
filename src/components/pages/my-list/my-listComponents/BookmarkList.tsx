import React from "react";
import BookmarkItem from "./BookmarkItem";
import { BookmarkListProps } from "../../../../types/types";

const BookmarkList: React.FC<BookmarkListProps> = ({ bookmarks, textColor, onRemove }) => {
  return (
    <div className="bookmark-scroll-bar txtlg:space-y-4 txtlg:mt-12 flex-auto overflow-y-scroll max-h-400">
      {bookmarks.length === 0 ? (
        <p className={`${textColor} flex justify-center p-48`}>No movies added yet.</p>
      ) : (
        bookmarks.map((bookmark) => (
          <BookmarkItem key={bookmark.id} bookmark={bookmark} textColor={textColor} onRemove={onRemove} />
        ))
      )}
    </div>
  );
};

export default BookmarkList;
