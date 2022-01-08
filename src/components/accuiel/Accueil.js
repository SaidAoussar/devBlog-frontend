import React,{useEffect, useState} from 'react'
import axios from 'axios'


export default function Accueil() {
	const [blogs, setBlogs] = useState([])
	async function getBlogs() {
		try {
		  const response = await axios.get('http://localhost:4000/blog', {
			headers: {
				'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWNmMjRlNTFiOTU2NGI2ZWRhYTlmNzQiLCJpYXQiOjE2NDA5NjcyMjZ9.8rRXmwgG1sW4UIhVmL4IozO2Quavw6qR6IRtqdpgMMI'
			 }
		  });
		  console.log(response);
		  return response
		} catch (error) {
		  console.error(error);
		}
	  }
	
	  useEffect(() => {
		getBlogs().then(res => {
			setBlogs(res.data)
		});
	  }, [])
    return (
    <div>
	{/* SECTION */}
	<div className="section">
		{/* container */}
		<div className="container">
			{/* row */}
			<div className="row">
				<div className="col-md-8">
					{/* post */}
					
					{/* /post */}
					{
						blogs.map((blog)=><div className="post post-row" key={blog.id}>
						<a className="post-img" href="blog-post.html"><img src="https://images.unsplash.com/photo-1641372031613-5df7e4ad84b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875&q=80" alt="" /></a>
						<div className="post-body">
							<div className="post-category">
								{
									blog.tags.map((tag,index) => 
										 <a href="category.html">{tag}</a>
									)
								}
							</div>
							<h3 className="post-title"><a href="blog-post.html">{blog.title}</a></h3>
							<ul className="post-meta">
								<li><a href="author.html">John Doe</a></li>
								<li>{new Date (blog.postTime).toLocaleString()}</li>
							</ul>
							<p>{blog.body.slice(0,200)}...</p>
						</div>
					</div>)
					}


					<div className="section-row loadmore text-center">
						<a href="#" className="primary-button">Load More</a>
					</div>
				</div>
				<div className="col-md-4">
					{/* galery widget */}
					<div className="aside-widget">
						<div className="section-title">
							<h2 className="title">Instagram</h2>
						</div>
						<div className="galery-widget">
							<ul>
								<li><a href="#"><img src="../../img/galery-1.jpg" alt="" /></a></li>
								<li><a href="#"><img src="../../img/galery-2.jpg" alt="" /></a></li>
								<li><a href="#"><img src="../../img/galery-3.jpg" alt="" /></a></li>
								<li><a href="#"><img src="../../img/galery-4.jpg" alt="" /></a></li>
								<li><a href="#"><img src="../../img/galery-5.jpg" alt="" /></a></li>
								<li><a href="#"><img src="../../img/galery-6.jpg" alt="" /></a></li>
							</ul>
						</div>
					</div>
					{/* /galery widget */}

					{/* Ad widget */}
					<div className="aside-widget text-center">
						<a style={{display: "inline-block",margin: "auto"}}>
							<img className="img-responsive" src="../../img/ad-1.jpg" alt="" />
						</a>
					</div>
					{/* /Ad widget */}
				</div>
			</div>
			{/* /row */}

		</div>
		{/* /container */}
	</div>
	{/* /SECTION */}
        </div>
    )
}
