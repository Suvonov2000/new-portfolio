const Cart = ({ icon, title, desc }) => {
  return (
    <div className="text-center p-5 w-[294px] min-h-[360px] mt-[35px] text-white bg-slate-400 rounded-lg shadow-lg hover:shadow-2xl">
      <div className={`text-[50px] flex justify-center my-5`}>{icon}</div>
      <h1 className="text-[20px] my-[20px] font-semibold">{title}</h1>
      <p className="text-[15px] hover:text-white">{desc}</p> 
    </div>
  );
};

export default Cart;
