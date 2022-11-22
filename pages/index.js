import { useEffect } from "react";
import Hero from "../components/Home/Hero/Hero";
import TopRate from "../components/Home/TopRate/TopRate";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../store/ManageData/GetData/GetDataAction";
useEffect;
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <div>
      <Hero />
      <TopRate />
    </div>
  );
}
