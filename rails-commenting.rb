# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# 1) This is the BlogPostsController and it speakes to the entier application, allowing us to view, create, update, and destory things in our application.
class BlogPostsController < ApplicationController
  def index
    # 2) This shows us everything that is inside of BlogPost. All of the blog posts and their information would be available to the application.
    @posts = BlogPost.all
  end

  def show
    # 3) Physically puts each post onto the website by looking through the BlogPosts IDs and showing how many have been created and what they say.
    @post = BlogPost.find(params[:id])
  end

  # 4) We need to establish a function to let us create new postings. This will allow us to create new posts to our blog.
  def new
    @post = Post.new
  end

  def create
    # 5) This allows BlogPost users to create new blogposts in the application.  
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # 6) Update. Once the Blog Post Id is found it is then updated/changed and put replaces the old post. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 7) Once you delete your post or a post and are looking for it this will return you to either the homepage, a 404 (or some number), or wherever the developer is trying to redirect you.
      redirect_to blog_post_path(@post)
    end
  end

  # 8) This creates a way to safeguard your app from unwanted user interferience/interaction.
  private
  def blog_post_params
    # 9) This makes it so every post that is created/updated/edited has to have title and content and be a apart of BlogPost. This allows us to not have users create things that are wrong or not a part of our blog post. 
    params.require(:blog_post).permit(:title, :content)
  end

end


# FILE: app/models/blog_post.rb

class BlogPost < ApplicationRecord
  # 10) It is creating a relationship with BlogPost and the comments on it, creating a foreign key for each comment.
  has_many :comments
end
