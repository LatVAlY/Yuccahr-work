<?php

function load_stylesheets() 
{
	wp_enqueue_style( 'style', get_stylesheet_uri() . '/style.css', array(), 1, 'all');
	wp_enqueue_style( 'style', get_stylesheet_uri() . '/block-style.css', array(), 1, 'all');
}
add_action('wp_enqueue_scripts', 'load_stylesheets');

remove_filter( 'the_content', 'wpautop' );
remove_filter( 'the_excerpt', 'wpautop' );
add_theme_support( 'post-thumbnails' );
add_theme_support( 'wp-block-styles' );
add_theme_support( 'editor-styles' );
add_editor_style( 'style-editor.css' );


global $wp;
$current_slug = add_query_arg( array(), $wp->request );


function add_js() 
{
	wp_enqueue_script( 'fadein', get_template_directory_uri() . '/js/fadein.js', array(), null, true );
	wp_enqueue_script( 'jquery', get_template_directory_uri() . '/js/jquery.js', array(), null, true );
	wp_enqueue_script( 'slick', get_template_directory_uri() . '/js/slick.js', array(), null, true );
	wp_enqueue_script( 'parsley', get_template_directory_uri() . '/js/parsley.js', array(), null, true );
	wp_enqueue_script( 'index', get_template_directory_uri() . '/js/index.js', array('jquery'), 4, true );
	wp_enqueue_script( 'modal', get_template_directory_uri() . '/js/modal.js', array(), 1, true );
}
add_action('wp_enqueue_scripts', 'add_js');



?>