<?php get_header(); ?>
<div class="page">
	<?php $urls = array('/','/how-it-works', '/pricing', '/about', '/contact', '/careers', '/support', '/security', '/integratios',
	 	'/terms-of-use', '/legal-notice', '/privacy-policy'); ?>
 	<?php $url.= $_SERVER['REQUEST_URI']; ?>
	<?php if ($url === "/blog"): ?>
		<header class="margin-top-4">
		<div class="row wrapper cols-centered" data-fadein="">
		<h1 class="h1 text-center-xs col col-md-66">The power of onboarding
			blog</h1>
		</div>
		</header>
		<!--most recent post-->
		<section class="wrapper">
		<div class="recent-post">
			<div id="post-<?php the_ID(); ?>" >
				<div class="entry clear"> 
			    	<div class="img-recent-post"><?php get_the_post_thumbnail(); the_post_thumbnail(); ?>
			    		<div class="wrapper-recent-post">
			    		<div class="top-position"><p>NEWEST</p></div>	
			    	<div class="title-position"><a href="<?php the_permalink(); ?>"><p><?php the_title();?></p></a></div>
			    	<div class="bottom-position">
			    		<div class="category"><?php $category = get_the_category();
							echo $category[0]->cat_name; ?></div>
						<div class="date"><?php echo get_the_date(); ?></div>
					</div>
			    	</div>
			    	</div>
			    		
		   		</div>
		   		<?php edit_post_link(); ?>
				 <?php echo wp_link_pages(); ?> 
	   		</div>
   		</div>
   	</section>
   	<!---filter by category-->
   	<section>
   	<?php $term    = get_queried_object();
	$term_id = ( isset( $term->term_id ) ) ? (int) $term->term_id : 0;
	$categories = get_categories( array(
	    'taxonomy'   => 'category', 
	    'orderby'    => 'name',
	    'parent'     => 0,
	    'hide_empty' => 0,
	) );
	?>
	<div class="filter-by-category">
	<nav class="content-navigation-blog">
    <?php
    foreach ( $categories as $category ) 
    {		
        $cat_ID = (int) $category->term_id;
         echo '<a class="a" category-index='.$cat_ID.'>' .$category->cat_name.'</a>';
        $cat_class = ( $cat_ID == $term_id ) ? 'is-active' : 'not-active';
    }
    ?>
	</nav>
	</div>
   	</section>
	<!--All the posts-->
	<section class="wrapper margin">
	<div class="search-container">
		<a  class="close-input"></a>
		<input type="text" class="search" name="keyword" id="keyword" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search blog'" placeholder = 'Search blog'></input>	
	</div>
	<div id="datafetch"></div>
	<div class="grid">
		<?php 
    $the_query = new WP_Query( array('post_type' =>'post',
		    'post_status' => 'publish',
		    'order' => 'DESC',
		    's' => esc_attr( $_POST['keyword'] ),
		    'posts_per_page' =>'10',
		    'offset' => 1) ); 

    if( $the_query->have_posts() ) :
        while( $the_query->have_posts() ): $the_query->the_post(); ?>
	<div id="post-<?php the_ID(); ?>" data-attr= <?php $category = get_the_category();
		      			foreach($category as $cd){
        				echo $cd->cat_ID; ;
        				}
					?> >			
		    <div class="entry-clear"> 
		     <div class="img-recent-post"><a href="<?php the_permalink(); ?>"><?php get_the_post_thumbnail(); the_post_thumbnail(); ?></a></div>
		       <div class="the_category">
		      		<?php $category = get_the_category();
		      			foreach($category as $cd){
        				echo $cd->cat_name;
        				}
					?>
				</div>
		       <a href="<?php the_permalink(); ?>"><p><?php the_title();?><p></a>
		       <?php edit_post_link(); ?>
		       <?php wp_link_pages(); ?>
		    </div>
		    <!--end entry-->
	    </div><!--end post-->

        <?php endwhile; 
         else: ?> <h2>No posts found</h2> <?php 
    endif;
	?> 
	<div class="grid-cell">
			<h3 class="h2">Subscribe<br>to updates</br></h3>
			<form action="https://yucca.us18.list-manage.com/subscribe/post?u=39501a16dd6de4f4c41c23262&amp;id=6101e56b68" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"  data-parsley-validate="" data-fadein="" novalidate target="_blank" class="is-visible">
            <div class="input-email">
			            <input type="email" required="" class="input" name="EMAIL" id="mce-EMAIL" placeholder="Enter your email address">
			</div>
           	<h7 class="h7">You may unsubscribe at any time. For more information, check out our Privacy Policy.</h7>
            <div class="centered-wrapper">
              <button type="submit" name="subscribe" id="mc-embedded-subscribe" class="button-white submit-button modal-button margin-top-1 sign-up-submit-button">
                Subscribe
              </button>
            </div>
          </form>
		</div>
		<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[6]='MMERGE6';ftypes[6]='radio';fnames[1]='MMERGE1';ftypes[1]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
	</div>
	<!--End all the posts-->
	</section>
	<div class="pagefold text-center"><a  id='load-more' class="button-coral" title="Show more">Load more</a></div>
	<section class="wrapper z-index-1 is-visible" data-fadein>
	<div class="large-cta">
			<h3 class="h2">Experience the power of <br class="show-sm">onboarding now!</h3>
			<div class="large-cta-button-box"><a target="_blank" title="Transform your onboarding now!" class="button-white margin-bottom-1 modal-open-button" rel="noopener noreferrer">Start free trail</a>
			</div>
	</div></section>
	<?php   
		elseif (in_array($url, $urls) && $url != '/blog'):
	 ?>
	
	<?php if ( have_posts() ) : ?>
	<?php while ( have_posts() ) : the_post(); ?>
  	<div id="post-<?php the_ID(); ?>" >
    <div class="entry clear"> 
       <?php get_the_post_thumbnail(); the_post_thumbnail(); ?>
       <?php the_content(); ?>
       <?php edit_post_link(); ?>
       <?php wp_link_pages(); ?>
    </div>
    <!--end entry-->
    </div><!--end post-->
    <?php endwhile; ?>
    <?php endif; ?>
	<?php else : ?>
	<section>
		<?php if ( have_posts() ) : ?>
	<?php while ( have_posts() ) : the_post(); ?>
	<div class="single-post">
	  	<div id="post-<?php the_ID(); ?>" >
	       <div class="img-recent-post"><?php get_the_post_thumbnail(); the_post_thumbnail(); ?></div>
	    	<div class="wrapper-small"> 

		       <div class="title-position"><h1><?php the_title();?></h1></div>
		       <div class="date-category-wrapper">
			       <div class="category">
			       	<?php $category = get_the_category();
						foreach($category as $cd){
			        	echo $cd->cat_name;
			        		}?>	
					</div>
					<div class="author"><span>Posted by </span><?php the_author(); ?>	</div>
					<div class="date"><span>on <?php echo get_the_date(); ?></span></div>
				</div>
				<!-- Begin Mailchimp Signup Form -->
				<div class="single-post-content-wrapper">
		       		<?php the_content(); ?>
		       		<div class="grid-cell" id="subscribe" >
						<h1>Subscribe to updates </h1>
						<form action="https://yucca.us18.list-manage.com/subscribe/post?u=39501a16dd6de4f4c41c23262&amp;id=6101e56b68" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"  data-parsley-validate="" data-fadein="" novalidate target="_blank" class="is-visible">
							<div class="input-email">
			            <input type="email" required="" class="input" name="EMAIL" id="mce-EMAIL" placeholder="Enter your email address"></div>
			           	<h7 class="h7">You may unsubscribe at any time. For more information, check out our Privacy Policy.</h7>
			            <div class="centered-wrapper">
			              <button  type="submit" name="subscribe" id="mc-embedded-subscribe" class="button-coral">
			                Subscribe
			              </button>
			            </div>
			          </form>
					</div>
					<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[6]='MMERGE6';ftypes[6]='radio';fnames[1]='MMERGE1';ftypes[1]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
		   		</div>
		   		<!-- end Mailchimp Signup Form -->
		       <?php edit_post_link(); ?>
		       <?php wp_link_pages(); ?>
		       <div class="wrapper-social-next-button">
	   			<div class="wrapper-social-share">
					<span class="share">Share</span>
					<ul class="social-nav">
					    <li>
					        <a class="a icon icon-linkedin" href="https://www.linkedin.com/company/34590863/" title="Connect to yuccaHR on LinkedIn" target="_blank"></a>
					    </li>
					    <li>
					        <a class="a icon icon-twitter" href="https://twitter.com/yuccaHR" title="Follow us on Twitter" target="_blank"></a>
					    </li>
					    <li>
					        <a class="a icon icon-facebook" href="https://facebook.com/yuccaHR" title="Follow us on facebook" target="_blank"></a>
					    </li>
					</ul>
				</div>
				 <?php 
					$prev = get_permalink(get_adjacent_post(false,'',false));
			     	$next = get_permalink(get_adjacent_post(false,'',true)); 
			     ?>
		       	<div class="intro-buttons next-button">
			     	<a class="button-coral margin-bottom-2" href="<?php echo $next; ?>">Next article</a>
				</div>
			</div>
	   	</div>	
	    </div>
      </div>
    </div>
     <?php endwhile; ?> 
     </section>
 	
    <section class="wrapper z-index-1 is-visible" data-fadein>
		<div class="large-cta">
				<h3 class="h2">Experience the power of <br class="show-sm">onboarding now!</h3>
				<div class="large-cta-button-box"><a target="_blank" title="Transform your onboarding now!" class="button-white margin-bottom-1 modal-open-button" rel="noopener noreferrer">Start free trail</a>
				</div>
		</div>
	</section>
    <?php else : ?>
	<?php endif; ?>
	

	<?php endif; ?>

<?php get_footer(); ?>