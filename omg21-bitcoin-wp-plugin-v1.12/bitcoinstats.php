<?php
/**
 * Plugin Name: OMG21 | Bitcoin Only WordPress Plugin
 * Plugin URI: https://github.com/omg21btc/Bitcoin-Only-WP-Plugin
 * Description: A plugin suite designed exclusively for Bitcoin.
 * Version: 1.12
 * Author: OMG21
 * Author URI: https://omg21btc.com/bitcoin-only-wp-plugin/
 * License: A "Slug" license name e.g. GPL2
 */
 
/*  Code by Thomas Toma | https://www.codeable.io/developers/thomas-toma/
*/

/*  Copyright 2023 Orange Manufacturing Group

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as 
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
*/

// Exit if accessed directly

// enqueue scripts
function bitcoinstats_enqueue_scripts() {
    // enqueue mempool script remote https://mempool.space/mempool.js
    wp_enqueue_script( 'bitcoinstats-mempool', 'https://mempool.space/mempool.js' );
    // enqueue block height script after mempool script
    wp_enqueue_script( 'bitcoinstats-script', plugins_url( 'assets/bitcoinstats.js', __FILE__ ), array( 'bitcoinstats-mempool' ), '1.0', true );
}
add_action( 'wp_enqueue_scripts', 'bitcoinstats_enqueue_scripts' );

// add shortcode for block height
function bitcoinstats_block_height() {
    // create block height div
    $block_height = '<div class="result-blocks">Loading...</div>';
    // return block height
    return $block_height;
}
add_shortcode( 'block_height', 'bitcoinstats_block_height' );

// add shortcode for mempool
function bitcoinstats_mempool( $atts = []) {
    if ( !isset( $atts['fee'] ) || !in_array($atts['fee'],array('high_priority','medium_priority','low_priority','no_priority','purging')) ) {
        return '<div class="alert alert-danger">Please specifcy fee type using fee attribute ( high_priority,medium_priority,low_priority,no_priority,purging )</div>';
    }
    // create mempool div
    $mempool = '<div class="result-mempool-info '.$atts['fee'].'">Loading...</div>';
    // return mempool
    return $mempool;
}
add_shortcode( 'mempoolfees', 'bitcoinstats_mempool' );

// add shortcode for btc price
function bitcoinstats_btc_price() {
	// create btc price div
	$btc_price = '<div class="result-btc-price">Loading...</div>';
	// return btc price
	return $btc_price;
}
add_shortcode( 'btc_usd', 'bitcoinstats_btc_price' );