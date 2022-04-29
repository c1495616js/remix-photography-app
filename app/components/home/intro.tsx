import Bg from '~/assets/bg-intro.jpeg';

const Intro = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-screen">
      <section className="h-full">
        <img src={Bg} className="inset-0 object-cover h-full" alt="bg" />
      </section>
      <section className="p-12 sm:p-20 bg-black">
        <h1 className="text-white text-4xl font-RadioCanada">
          Travel & Lifestyle
        </h1>
        <hr className="w-24 h-1 bg-white self-start my-4" />
        <div className="py-10">
          <p className="text-gray-200 font-RadioCanada">
            A gray cat slinks past a wooden house.
            <br />
            There’s something a little intimidating
            <br />
            attempting to describe
          </p>
        </div>
        <div className="py-10">
          <p className="text-gray-200 font-RadioCanada">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit. Vivamus at nibh tincidunt, bibendum
            ligula id. Nemo enim ipsam voluptatem quiatotam rem aperiam, eaque
            ipsa quae ab illo inventore veritatis et quasi architecto beatae
            vitae dicta sunt explicabo.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Intro;
