import Footer from "../components/Footer";

type Props = {}

const page = (props: Props) => {
  return (
      <div className="flex max-w-[1200px] mx-auto flex-col items-center py-2 min-h-screen">
          Research Page
          <Footer />
      </div>
  );
}

export default page