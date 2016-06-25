<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * e.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package ItalyStrap
 * @since 1.0.0
 */

namespace ItalyStrap;

if ( ! defined( 'ABSPATH' ) or ! ABSPATH ) {
	die();
}

$layout_settings = (array) apply_filters( 'italystrap_layout_settings', array() );
get_header();
do_action( 'italystrap_before_main' );
?>
<!-- Main Content -->
	<main id="index">
		<?php do_action( 'content_open' ); ?>
		<div class="container">
			<?php do_action( 'content_container_open' ); ?>
			<div class="row">
				<div <?php Core\content_class( 'col-md-8' ) ?> itemscope itemtype="http://schema.org/CollectionPage">
					<?php
					// do_action( 'content_col_open' );

					do_action( 'italystrap_before_loop' );
					do_action( 'italystrap_loop' );
					do_action( 'italystrap_after_loop' );

					// get_template_part( 'loops/loop' );
					// require locate_template( '/loops/loop.php' );

					// if ( have_posts() ) :

					// 	while ( have_posts() ) :

					// 		the_post();

					// 		get_template_part( 'loops/content', get_post_type() );

					// 	endwhile;

					// 	bootstrap_pagination();

					// else :

					// 	get_template_part( 'loops/content', 'none' );

					// endif;

					do_action( 'content_col_closed' ); ?>
				</div><!-- / .col-md-8 -->
				<?php
				if ( ! in_array( 'hide_sidebar', $layout_settings, true ) ) {
					get_sidebar();
				}
				?>
			</div><!-- / .row -->
			<?php do_action( 'content_container_closed' ); ?>
		</div><!-- / .container -->
		<?php do_action( 'content_closed' ); ?>
	</main><!-- / #index -->

<?php
do_action( 'italystrap_after_main' );
get_footer();
