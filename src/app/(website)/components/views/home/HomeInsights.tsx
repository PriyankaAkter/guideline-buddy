import Button from "../../shared/Button"


const HomeInsights = () => {
  return (
    <div className="py-20 my-60  flex flex-col justify-center items-center  gap-20 sb text-white" style={{backgroundImage: `url('/assets/images/home.png')`,backgroundSize: 'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
          <h3>Discover the Latest <br />Mortgage Insights</h3>
          <Button title="Discover Our Blogs" href="/" className="w-fit bg-[#5437CC]" />
    </div>
  )
}

export default HomeInsights