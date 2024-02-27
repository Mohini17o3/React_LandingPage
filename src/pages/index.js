import Navbar from  "@/components/Navbar";
import Header from "@/components/Header";
import Card from "@/components/Card";
import Rating from "@/components/Rating";
import CustomHighlight from "@/components/CustomHighlight";
import ButtonTag from "@/components/ButtonTag";
import DealsCard from "@/components/DealsCard";
import NewsLetter from "@/components/NewsLetter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
  <Navbar />
  <Header
    text = "Best Website Builders in  the US"
   />
   <Card
  
     id = "1"
     Tag = {<ButtonTag
       
        text = "Best Choice"
        image = "trophy.png"

      />}
     image = "card_image.png"
     title = "Builder 1 "
     desc_heading = "WixPro 72-Inch Responsive Website Builder - " 
     description = "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
     Highlight = "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides." 
      Rating = {<Rating 
        rate = "9.8"
        remark = "Excellent"
        stars = "⭐⭐⭐⭐"

      />}
      

    />

<Card
  
  id = "2"
  Tag = {<ButtonTag
    
     text = "Best Value"
     image = "diamond.png"

   />}
  image = "card_image.png"
  title = "Builder 2"
  desc_heading = "SiteCraft 68-Inch Ultimate Web Design Studio- " 
  description = " Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"
  Highlight = "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations." 
   Rating = {<Rating 
     rate = "9.5"
     remark = "Excellent"
     stars = "⭐⭐⭐⭐"

   />}
   

 />

<Card
  
  id = "3"
  image = "card_image.png"
  title = "Builder 3 "
  desc_heading = "WixPro 72-Inch Responsive Website Builder- " 
  description = " Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
  Highlight = "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides." 
   Rating = {<Rating 
     rate = "9.3"
     remark = "Exceptional"
     stars = "⭐⭐⭐"

   />}
   

 />
 <Card
  
  id = "4"
  image = "card_image.png"
  title = "Builder 4 "
  desc_heading = "CDK Resposive Builder:  " 
  description = "  An extensive library of widgets and apps, and detailed step-by-step guides"
  Highlight = <CustomHighlight />
   Rating = {<Rating 
     rate = "9.1"
     remark = "Very Good"
     stars = "⭐⭐⭐"

   />}
   

 />
<span style ={{marginLeft :"150px"}}><h2>Related Deals you might like</h2></span> 

<div className="dealsCard">
<DealsCard
  
  image = "card_image.png"
  discount = "20% off "
  time = "Limited time"
  title = "Web Builder"
  desc = "Computer Modern classic with wix support"
  discount_price = "$39.96"
  actual_price = "$49.96"
  deal = "(20% Off)"
 />


<DealsCard
  image = "card_image.png"
  discount = "20% off "
  time = "Limited time"
  title = "Web Builder"
  desc = "Computer Modern classic with wix support"
  discount_price = "$39.96"
  actual_price = "$49.96"
  deal = "(20% Off)"
 />

 
<DealsCard
  image = "card_image.png"
  discount = "20% off "
  time = "Limited time"
  title = "Web Builder"
  desc = "Computer Modern classic with wix support"
  discount_price = "$39.96"
  actual_price = "$49.96"
  deal = "(20% Off)"
 />


 </div>

 <NewsLetter />
  <Footer />
</>
  );
}
