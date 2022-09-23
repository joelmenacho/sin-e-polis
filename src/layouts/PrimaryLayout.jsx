import { Outlet } from "react-router-dom";

const PrimaryLayout = () => {
  return (
    <>
      <header>Sin E Spoiler</header>
      <main>
        <Outlet />
      </main>
      <footer>Joel Menacho</footer>
    </>
  );
};
export default PrimaryLayout;

// import { Outlet } from "react-router-dom";

// const PrimaryLayout = () => {
//   return (
//     <>
//       <header>Sin E Spoiler</header>
//       <main>
//         <Outlet />
//       </main>
//       <footer>Eliot Garamendi</footer>
//     </>
//   );
// };
// export default PrimaryLayout;
