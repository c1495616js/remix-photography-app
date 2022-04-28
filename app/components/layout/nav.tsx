import Logo from '~/assets/logo.png';

const nav = () => {
  return (
    <div className="fixed top-0 left-0 h-[60px] w-full">
      <div className="px-10 py-2 flex items-center justify-between w-full h-full">
        <section>
          <img src={Logo} alt="logo" className="h-4" />
        </section>
        <section>List</section>
      </div>
    </div>
  );
};

export default nav;
