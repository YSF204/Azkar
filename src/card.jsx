import { useState } from "react";
import CachedIcon from "@mui/icons-material/Cached";
import "./card.css";

function Card({ title, initialNumber, BgColor }) {
  const [curCount, setCurCount] = useState(initialNumber);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div
        className="cardContainer"
        style={{
          backgroundColor: BgColor,
        }}
        onClick={() => curCount > 0 && setCurCount(curCount - 1)}
      >
        <div
          style={{
            height: "190px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2 style={{ textAlign: "center", width: "100%" }}>{title}</h2>
        </div>

        <button
          className="ResetCount"
          onClick={(e) => {
            e.stopPropagation();
            setCurCount(initialNumber);
          }}
        >
          <CachedIcon />
        </button>
        <h3
          className="CurCount"
          style={{
            fontSize: "30px",
            color: "black",
          }}
        >
          {curCount}
        </h3>
        <h4 className="StartCount">{initialNumber}</h4>
      </div>
    </div>
  );
}

export default Card;
