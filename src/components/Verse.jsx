import React from "react";

export const Verse = ({ verse, chapterNumber, verseNumber }) => {
  return (
    <>
      <h5 className="verseNumber">
        {chapterNumber} <span> : </span>
        {verseNumber}
      </h5>
      <div className="bg">
        <div className="verse">
          <p>{verse}</p>
        </div>
      </div>
    </>
  );
};


