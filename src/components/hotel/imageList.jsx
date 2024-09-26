import { ImageList, ImageListItem } from "@mui/material";

import styles from "./styles.module.css";

function HotelImageList({ principalImage, firstRoom, secondRoom, thirdRoom }) {
  const isImageAvailable = (image) => image && image.trim() !== "";
  const itemData = [
    {
      img: principalImage,
      title: "Imagem principal",
      rows: 2,
      cols: 2,
    },
    {
      img: firstRoom,
      title: "Primeiro quarto",
    },
    {
      img: secondRoom,
      title: "Segundo quarto",
    },
    {
      img: thirdRoom,
      title: "Terceiro quarto",
      cols: 2,
    },
  ].filter((item) => isImageAvailable(item.img));

  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  return (
    <div className={styles.image_list}>
      <ImageList
        sx={{ width: "100%", height: "auto" }}
        variant="quilted"
        cols={4}
        rowHeight={200}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 200, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default HotelImageList;
