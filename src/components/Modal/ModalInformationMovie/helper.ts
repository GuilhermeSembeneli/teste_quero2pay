export const getStartUse = (star: number): string[] => {
  const starShowing: string[] = [];
  const maxStar = Math.floor(star) / 2;

  for (
    let numberActualStar = 1;
    Math.floor(maxStar) >= numberActualStar;
    numberActualStar++
  ) {
    const isPar = maxStar % numberActualStar > 0;


    if (isPar && Math.floor(numberActualStar) >= Math.floor(maxStar)) {
      starShowing.push("/images/star.png");
      starShowing.push("/images/rating.png");
      continue;
    }
    
    starShowing.push("/images/star.png");
  }

  return starShowing;
};
