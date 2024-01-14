import img1 from "../../assets/scan code.png";
import img2 from "../../assets/cg pay.jpg";
import img3 from "../../assets/visa.png";
import img4 from "../../assets/ips.jpg";
import img5 from "../../assets/khalti.png";
import img6 from "../../assets/sewa.png";
import img7 from "../../assets/secure.jpg";
import img8 from "../../assets/google-play-store-logo-keyword-the-amazon-insider-podcast-6.png";
import img9 from "../../assets/Available_on_the_App_Store_(black).png";
const Footer = () => {
  return (
    <div className="container w-full mx-auto py-10 bg-black">
      <footer>
        <div className="flex gap-16 px-20 pb-12">
          <nav className="space-y-3">
            <header className="text-white">Information</header>
            <p className="link link-hover text-slate-500 text-sm">About Us</p>
            <p className="link link-hover text-slate-500 text-sm">FAQ</p>
            <p className="link link-hover text-slate-500 text-sm">
              Terms & Condition
            </p>
            <p className="link link-hover text-slate-500 text-sm">
              Privacy Policy
            </p>
            <p className="link link-hover text-slate-500 text-sm">
              Return Policy
            </p>
            <p className="link link-hover text-slate-500 text-sm">
              Refund Policy
            </p>
          </nav>
          <nav className="space-y-3">
            <header className="text-white">Stores</header>
            <p className="link link-hover text-slate-500 text-sm">CG Digital</p>
            <p className="link link-hover text-slate-500 text-sm">LG Shoppe</p>
          </nav>
          <nav className="space-y-3">
            <header className="footer-title text-white">Services</header>
            <p className="link link-hover text-slate-500 text-sm">
              Store locator
            </p>
            <p className="link link-hover text-slate-500 text-sm">
              Courier Delivery Location
            </p>
            <p className="link link-hover text-slate-500 text-sm">
              Warranty Info
            </p>
          </nav>
          <nav className="space-y-3">
            <header className="footer-title text-white">Contact Us</header>
            <p className="link link-hover text-slate-500 text-sm">
              +97701 5108122
            </p>
            <p className="link link-hover text-slate-500 text-sm">
              Email: info@cgworld.com
            </p>
          </nav>
          <nav className="space-y-3">
            <header className="footer-title text-white">New Seller</header>
            <p className="text-slate-500">
              Don't miss any updates of our new products
              <br />
              and all the astonishing offers we bring for
              <br />
              you.
            </p>
            <div className="flex">
              <input
                className="text-white bg-slate-800 p-3"
                type="text"
                placeholder="Email Address"
              />
              <button className="btn border-none bg-blue-700 text-white rounded-none">
                Submit
              </button>
            </div>
          </nav>
        </div>
        <header className="text-white px-20 pb-8">Download App</header>
        <div className="flex gap-16 px-20 pb-7">
          <nav className="space-y-2">
            <p className="link link-hover text-white text-sm">Scan QR Code</p>
            <img className="w-32" src={img1} alt="" />
          </nav>
          <nav className="space-y-2">
            <p className="link link-hover text-white text-sm">
              Download the App
            </p>
            <div className="space-y-4">
               <img className="w-36" src={img8} alt="" />
               <img className="w-36" src={img9} alt="" />
            </div>
          </nav>
        </div>
      </footer>
      <footer className="footer px-20 pt-8  bg-black text-white border-t-2 border-slate-700">
        <nav className="justify-self-start space-y-3">
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
          <h1>@ 2022 CG World. All Rights Reserved</h1>
        </nav>

        <aside className="grid grid-cols-1 justify-self-end">
          <div className="flex items-center gap-2">
            <img className="w-5" src={img7} alt="" />
            <p>Secure Payment</p>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-14 h-7 rounded-md" src={img2} alt="" />
            <img className="w-14 h-7 rounded-md bg-white" src={img3} alt="" />
            <img className="w-14 h-7  rounded-md" src={img4} alt="" />
            <img className="w-16 h-7 rounded-md" src={img5} alt="" />
            <img className="w-16 h-7 rounded-md" src={img6} alt="" />
          </div>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;

