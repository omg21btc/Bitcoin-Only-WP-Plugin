---

# OMG21 | Bitcoin only WordPress Plugin Suite

## Description
OMG21 | Bitcoin only WordPress Plugin Suite is a WordPress plugin suite designed exclusively for Bitcoin. This plugin suite currently includes features for displaying live mempool fees and block height information. It's specifically compatible with Elementor, with potential adaptability to other website builders.

## Installation
1. Download the plugin from [GitHub](https://github.com/omg21btc/Bitcoin-Only-WP-Plugin).
2. Upload the plugin files to your WordPress site's `/wp-content/plugins/` directory, or install the plugin through the WordPress plugins screen.
3. Activate the plugin through the 'Plugins' screen in WordPress.

## Usage
This plugin suite allows the integration of live Bitcoin network data into your website using the following ShortCodes:

#### CURRENT BLOCK HEIGHT
- **Block Height:** `[block_height]` - Shows the current height of the Bitcoin blockchain.

#### CURRENT TRANSACTION FEES
- **High Priority:** `[mempoolfees fee="high_priority"]` - Displays the fee for the fastest transaction confirmation.
- **Medium Priority:** `[mempoolfees fee="medium_priority"]` - Shows the fee for a medium-priority transaction.
- **Low Priority:** `[mempoolfees fee="low_priority"]` - Indicates the fee for a low-priority transaction.
- **No Priority:** `[mempoolfees fee="no_priority"]` - Displays the economy fee for transactions where time is not a factor.
- **Purging:** `[mempoolfees fee="purging"]` - Provides the minimum fee where transactions are at risk of being dropped from the mempool.

#### CURRENT EXCHANGE RATE
- **BTC/USD:** `[btc_usd]` - Shows the real-time average exchange rate of Bitcoin(BTC) to US Dollar(USD).

These ShortCodes can be easily added to your website using Title or Text widgets in Elementor. The plugin has been tested exclusively with Elementor.

## Styling
All styling for the displayed data can be handled via CSS or within Elementor's style controls, similar to regular text elements.

## Compatibility
Currently, this plugin suite has been tested and is confirmed to work with Elementor. Compatibility with other website builders may be explored in future updates.

## License
This plugin is open source and available under the GNU General Public License v2.0.

## Future Developments
While the current version focuses on mempool fees and block height, future updates will introduce more Bitcoin only features to this suite.

## Support
For support, queries, or contributions, please visit our [GitHub repository](https://github.com/omg21btc/Bitcoin-Only-WP-Plugin).

---

Lnurl-address Donations : sats@omg21btc.com
