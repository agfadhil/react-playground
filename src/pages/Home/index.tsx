import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Home = () => {
  return (
    <section className="flex gap-1 flex-col items-center justify-center h-screen">
      <Link to="/basic-form">
        <Button>basic form</Button>
      </Link>
      <Link className="button" to="/react-pdf">
        <Button>react pdf</Button>
      </Link>
    </section>
  );
};
export default Home;
