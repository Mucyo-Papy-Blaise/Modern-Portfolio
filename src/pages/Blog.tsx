import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTransition from "../Component/PageTransition";
import { ArrowLeft,Calendar,Clock,User } from "lucide-react";
import { motion,AnimatePresence } from "framer-motion";


const Blog: React.FC = () => {
interface blogProps {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    tags: string[];
}


  const categories = ["All","Design Trends","Development","UI Design","Accessibility","UX Research"];

  const blogs: blogProps[] = [
    {
        id: 1,
        title: "he Future of Web Design: Trends to Watch in 2025",
        excerpt: "Discover the emerging trends that are shaping the future of web design and how they'll impact user experience.",
        content: "As we move further into 2024, web design continues to evolve at a rapid pace. From AI-driven personalization to immersive 3D experiences, the way we design and interact with websites is undergoing a dramatic transformation...",
        author: "Alex Thompson",
        date: "March 15, 2024",
        readTime: "5 min read",
        category:"Design Trends",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2070",
        tags: ["Web Design", "UX", "Trends", "Technology"]
    },
    {
        id: 2,
        title: "Mastering CSS Grid: A Comprehensive Guide",
        excerpt: "Learn how to create complex layouts with CSS Grid and take your web development skills to the next level.",
        content: "CSS Grid has revolutionized the way we approach web layouts. In this comprehensive guide, we'll explore advanced techniques and best practices...",
        author: "Sarah Chen",
        date: "March 12, 2024",
        readTime: "8 min read",
        category: "Development",
        image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=2070",
        tags: ["CSS", "Web Development", "Tutorial", "Frontend"]
    },
    {
        id: 3,
        title: "The Psychology of Color in UI Design",
        excerpt: "Understanding how color choices impact user behavior and emotional responses in digital interfaces.",
        content: "Color is more than just an aesthetic choice in UI design. It's a powerful tool that can influence user behavior, evoke emotions, and enhance the overall user experience...",
        author: "Maria Rodriguez",
        date: "March 10, 2024",
        readTime: "6 min read",
        category: "UI Design",
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=2070",
        tags: ["UI Design", "Psychology", "Color Theory", "UX"]
    },
    {
        id: 4,
        title: "Building Accessible Web Applications",
        excerpt: "Essential practices and guidelines for creating inclusive web experiences for all users.",
        content: "Web accessibility is not just a nice-to-have feature; it's a fundamental aspect of modern web development. Learn how to make your applications accessible to everyone...",
        author: "James Wilson",
        date: "March 8, 2024",
        readTime: "7 min read",
        category: "Accessibility",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=2070",
        tags: ["Accessibility", "Web Development", "Inclusion", "Best Practices"]
    },
  ]

  const navigate = useNavigate();
  const [selectedCategory, setselectedCategory] = useState<number | null>(null);
  const [isHoveredCard,setIsHoveredCard] = useState<number |null>(null)
  const [selectedPost, setSelectedPost] =  useState<blogProps | null> (null)
  
 
  const handleCategory = (index: number) => {
    setselectedCategory(selectedCategory === index ? null : index);
  };

  const handleClickPost =(blog:blogProps)=>{
    setSelectedPost(blog)
  }
  
  const handleBack =()=>{
    setSelectedPost(null)
  }

  return (
    <PageTransition>
      <div className="w-full min-h-screen bg-[#111111] p-8">
        <div className="max-w-[1024px] mx-auto">
          <button
            className="pb-8 flex flex-row items-center justify-center gap-1"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="text-gray-400" />
            <p className="text-gray-400 text-[20px]">Back</p>
          </button>

          <div className="flex items-center justify-center gap-4 pb-5 text-white font-poppins">
            <h1 className="font-bold text-[30px] text-[#ffc86b]">Blog</h1>
            <div className="flex-1 bg-[#1A1A1A] h-[1px]" />
            <input
              type="text"
              className="bg-[#1A1A1A] w-[300px] h-10 outline-none focus:ring-2 focus:ring-[#ffc86b] rounded-xl p-4"
              placeholder="Search Articles"
            />
          </div>

          <div className="flex gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategory(index)}
                className={`p-2 rounded-full font-poppin font-extralight text-[15px] ${
                  selectedCategory === index
                    ? "bg-[#ffc86b] text-black"
                    : "bg-[#1A1A1A] text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

        {/* Card */}

        {selectedPost ? (
          <div className=" mt-8">
            <button
              className="pb-4 flex flex-row items-center justify-start gap-1 text-[#ffc86b] text-lg"
              onClick={handleBack}
            >
              <ArrowLeft />
              <i>Back to articles</i>
            </button>
            <div className="bg-[#1A1A1A] p-6 rounded-lg">
                <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-72 object-cover rounded-lg" />
                <div className="flex flex-row justify-start items-center gap-4 text-gray-400 mt-3">
                  <User className="w-[14px]"/>
                  <p  className="text-14px"> {selectedPost.author}</p>• 
                  <Calendar className="w-[14px]"/>
                   <p className="text-14px">{selectedPost.date} </p> • 
                   <Clock className="w-[14px]"/>
                   <p className="text-14px">{selectedPost.readTime}</p>
                </div>

                <h1 className="text-[#ffc86b] text-2xl font-bold mt-4">{selectedPost.title}</h1>
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag, index)=>
                  <div key={index}
                  className="bg-[#252525] text-white text-[12px] px-2 py-1 rounded-lg font-medium"
                  >
                    {tag}
                  </div>
                  )}
                </div>
                <p className="text-white mt-4">{selectedPost.content}</p>
            </div>
            </div>
          
        ) 
 
        :(
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {blogs.map((blog)=>
            <motion.div
            key={blog.id}
            className={`bg-[#111111] rounded-xl cursor-pointer ${
                isHoveredCard === blog.id ? "bg-[#1A1A1A]" : ""
            }`}
            onMouseEnter={()=>setIsHoveredCard(blog.id)}
            onMouseLeave={()=>setIsHoveredCard(null)}
            >
            <div className="bg-white overflow-hidden relative cursor-pointer rounded-t-lg">
                 <img src={blog.image} alt="" className={`w-full h-full object-cover ${
                    isHoveredCard === blog.id ? "w-full h-52 transition-transform duration-500 ease-in-out scale-105" : "w-full h-52" }`}/>
            <div className="absolute bg-[#ffc86b] p-2 translate-x-3 top-3 rounded-3xl"> 
                <p className="text-[12px] font-semibold">{blog.category}</p>
            </div>
            </div>
            <div className="flex flex-col p-4 font-poppins">
               <div className="flex flex-row justify-start items-center gap-2">
               <Calendar className="text-gray-400  w-[12px]" />
               <p className="text-gray-400 text-[12px]">{blog.date}</p> 
               <Clock className="text-gray-400 w-[12px] ml-5"/>
               <p className="text-gray-400 text-[12px] text-nowrap">{blog.readTime}</p>
               </div>

               <div className="flex flex-col text-white h-[160px] mt-4 text-[15px]">
                    <h1 className={`mb-5 ${isHoveredCard === blog.id ? "text-[#ffc86b]" : ""}`}>{blog.title}</h1>
                    <p className="text-gray-400 text-[13px]">{blog.excerpt}</p>
                    <button className={`text-[#ffc86b] text-[12px] mt-auto text-start cursor-pointer hover:underline`}
                    onClick={()=>handleClickPost(blog)}
                    >Read More</button>
               </div>
            </div>
            </motion.div>
            )}
        </div>
        )}
        </div>
      </div>
    </PageTransition>
  );
};

export default Blog;
