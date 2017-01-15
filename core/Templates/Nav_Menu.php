<?php
/**
 * Title Controller API
 *
 * [Long Description.]
 *
 * @link www.italystrap.com
 * @since 4.0.0
 *
 * @package ItalyStrap
 */

namespace ItalyStrap\Core\Templates;

use ItalyStrap\Core\Event\Subscriber_Interface;

if ( ! defined( 'ABSPATH' ) or ! ABSPATH ) {
	die();
}

use ItalyStrap\Core\Navbar\Navbar as Nav_Menu;

/**
 * Class description
 */
class Nav_Menu extends Template_Base implements Subscriber_Interface  {

	/**
	 * Returns an array of hooks that this subscriber wants to register with
	 * the WordPress plugin API.
	 *
	 * @return array
	 */
	public static function get_subscribed_hooks() {

		return array(
			// 'hook_name'							=> 'method_name',
			'italystrap_after_header'	=> 'render',
		);
	}

	/**
	 * Function description
	 */
	public function render() {
		// $navbar = new Nav_Menu( $this->theme_mod );
		$navbar = new Nav_Menu( self::$mods );
		$navbar->output();
	}
}