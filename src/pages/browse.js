import useContent from "../hooks/useContent";
import selectedFilter from "../utils/selectedFilter";
import { BrowseSection } from "../sections/browseSection";

export const Browse = () => {
  //series & films
  const { series } = useContent("series");
  const { films } = useContent("films");
    // console.log(series);
    // console.log(films);
  //slides
  const slides = selectedFilter({ series, films });
  console.log(slides);
  //pass to browse section
  return <BrowseSection slides={slides} />;
};
