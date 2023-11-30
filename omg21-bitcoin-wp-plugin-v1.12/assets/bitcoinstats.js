const init = async () => {
        
    const { bitcoin: { websocket } } = mempoolJS({
      hostname: 'mempool.space'
    });

    const ws = websocket.initClient({
      options: ['blocks', 'stats', 'mempool-blocks'],
    });

    ws.addEventListener('message', function incoming({data}) {
      const res = JSON.parse(data.toString());
      if (res.block) {
        jQuery('.result-blocks').html(res.block.height);
      }
      if (res.fees) {
        // parse all divs with class result-mempool-info
        jQuery('.result-mempool-info').each(function(){
            // check if the div search for fastest
            if(jQuery(this).hasClass('high_priority')){
                jQuery(this).html(res.fees.fastestFee + ' sat/vB');
            } else 
            // check if the div search for half
            if(jQuery(this).hasClass('medium_priority')){
                jQuery(this).html(res.fees.halfHourFee + ' sat/vB');
            } else
            // check if the div search for hour
            if(jQuery(this).hasClass('low_priority')){
                jQuery(this).html(res.fees.hourFee + ' sat/vB');
            } else
            // check if div search for minimum
            if(jQuery(this).hasClass('no_priority')){
                jQuery(this).html(res.fees.economyFee + ' sat/vB');
            } else
            // check if div search for economy
            if(jQuery(this).hasClass('purging')){
                jQuery(this).html(res.fees.minimumFee + ' sat/vB');
            } else {
                // if not found, show fastest
                jQuery(this).html(res.fastestFee + ' sat/vB');
            }
        });
      }
    });
  };
init();
// init initial data using rest api
jQuery('.result-blocks').html('Loading...');
jQuery('.result-mempool-info').html('Loading...');
jQuery('.result-btc-price').html('Loading...');
// get block hight using rest api
jQuery.getJSON('https://mempool.space/api/blocks/tip/height', function(data) {
    jQuery('.result-blocks').html(data);
});
// get mempool info using rest api
jQuery.getJSON('https://mempool.space/api/v1/fees/recommended', function(data) {
    jQuery('.result-mempool-info').each(function(){
        // check if the div search for fastest
        if(jQuery(this).hasClass('high_priority')){
            jQuery(this).html(data.fastestFee + ' sat/vB');
        } else 
        // check if the div search for half
        if(jQuery(this).hasClass('medium_priority')){
            jQuery(this).html(data.halfHourFee + ' sat/vB');
        } else
        // check if the div search for hour
        if(jQuery(this).hasClass('low_priority')){
            jQuery(this).html(data.hourFee + ' sat/vB');
        } else
        // check if div search for minimum
        if(jQuery(this).hasClass('no_priority')){
            jQuery(this).html(data.economyFee + ' sat/vB');
        } else
        // check if div search for economy
        if(jQuery(this).hasClass('purging')){
            jQuery(this).html(data.minimumFee + ' sat/vB');
        } else {
            // if not found, show fastest
            jQuery(this).html(data.fastestFee + ' sat/vB');
        }
    });
});
// get btc price from coincap
// Create a WebSocket connection to the Coincap server
const ws = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin');

// Listen for messages
ws.addEventListener('message', (event) => {
    const data = JSON.parse(event.data);
    var btcusd = data.bitcoin; // price
	// parse btcusd to float
	btcusd = parseFloat(btcusd);
	// format price to 2 decimals and add $ sign and comma
	btcusd = btcusd.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
	// show price in div
	jQuery('.result-btc-price').html('$'+btcusd);
});

// Connection closed
ws.addEventListener('close', (event) => {
    
});

// Connection error
ws.addEventListener('error', (event) => {
    
});