function importAll(r: any) {
  let images: any[] = [];
  r.keys().map((item: any, index: number) => {
    images[index] = r(item);
    return images;
  });
  return images.reduce(
    (arr, item, idx) => [...arr, { id: idx, img: item }],
    []
  );
}

const DataImgPanigate = importAll(
  require.context("component/img/imgPanigate/", true, /\.(png|jpe?g|svg)$/)
);

/*
require.context(<path>, true (ko cần qtam cái này đâu cứ true là được :v), 
/\.(png|jpe?g|svg)$/ ( regex name file, ở đây nó sẽ lấy file có đuôi .png, .jpe, jpeg, svg ))
*/

export { DataImgPanigate };
