# univ3_gsheets
Google Sheets Library for Uniswap V3 Math

Ported over code from [github.com/jeiwan/uniswapv3-code](https://github.com/Jeiwan/uniswapv3-code/).

## Installation

Open a new Google Sheets document and paste in the contents of [Code.gs](https://github.com/Steakhouse-Financial/univ3_gsheets/blob/main/Code.gs) into `Code.gs`. The following functions are thereafter available:

## Functions


### `get_min_tick()`

Returns `MIN_TICK = -887272`

### `get_max_tick()`

Returns `MAX_TICK = 887272`

### `get_q96()`

Returns `Q96 = 2**96`

### `get_wad()`

Returns `WAD = 10**18`

### `price_to_sqrtp(p)`

Returns Uniswap v3 style square root

n.b. 

> Ticks are integers that can be positive and negative and, of course, they’re not infinite. Uniswap V3 stores $\sqrt{P}$ as a fixed point Q64.96 number, which is a rational number that uses 64 bits for the integer part and 96 bits for the fractional part. Thus, prices (equal to the square of $\sqrt{P}$) are within the range: $[2^{-128}, 2^{128}]$.
> 
From [Uniswap v3 Book](https://uniswapv3book.com/)

### `sqrtp_to_price(sqrtp)`

Returns the inverse conversion.

### `tick_to_sqrtp(t)`

Returns the tick value to Q96 square root price.

### `liquidity0(amount, pa, pb)`

Returns the UniMath liquidity of token0 between two prices.

### `liquidity1(amount, pa, pb)`

Returns the UniMath liquidity of token1 between two prices.

### `calc_amount0(liq, pa, pb)`

Returns the amount of token0 for a given amount of liquidity between two prices.

### `calc_amount1(liq, pa, pb)`

Returns the amount of token1 for a given amount of liquidity between two prices

### `calc_amount_out0(amtliq0, amtliq1, price_low, price_cur, price_upp, amttrade1)`

Calculate the amount of token0 coming out of a trade for a given amount of liquidity between two prices.

### `max_trade_for_slip(amtliq0, amtliq1, price_low, price_cur, price_upp, max_slip)`

Calculate the maximum trade size that can settle for the given liquidity between two prices at a maximum slippage boundary. 

Assumes the range is the only liquidity available.

----

![damn](https://media.licdn.com/dms/image/sync/D4E27AQHgtQHUVDCteg/articleshare-shrink_800/0/1705432059349?e=2147483647&v=beta&t=FT1ccL8xSVfj6Kydk9UsyIQ7P6P2j7SrvOE1F16pZIQ)
