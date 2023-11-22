MIN_TICK = -887272
MAX_TICK = 887272

Q96 = 2**96
WAD = 10**18

function get_min_tick() {
  return MIN_TICK
}

function get_max_tick() {
  return MAX_TICK
}

function get_q96() {
  return Q96
}

function get_wad() {
  return WAD
}

function price_to_tick(p){
    return Math.trunc(Math.log(p, 1.0001))
}

function price_to_sqrtp(p){
    return Math.trunc(Math.sqrt(p) * Q96)
}

function sqrtp_to_price(sqrtp){
    return (sqrtp / Q96) ** 2
}

function tick_to_sqrtp(t){
    return Math.trunc((1.0001 ** (t / 2)) * Q96)
}

function liquidity0(amount, pa, pb){
    if (pa > pb) {
        pa, pb = pb, pa
    }
    return (amount * (pa * pb) / Q96) / (pb - pa)
}

function liquidity1(amount, pa, pb){
    if (pa > pb) {
        pa, pb = pb, pa
    }
    return amount * Q96 / (pb - pa)
}

function calc_amount0(liq, pa, pb){
    if (pa > pb) {
        pa, pb = pb, pa
    }
    return Math.abs(Math.trunc(liq * Q96 * (pb - pa) / pb / pa))
}

function calc_amount1(liq, pa, pb){
    if (pa > pb) {
        pa, pb = pb, pa
    }
    return Math.abs(Math.trunc(liq * (pb - pa) / Q96))
}

function calc_amount_out0(amtliq0, amtliq1, price_low, price_cur, price_upp, amttrade1) {
    sqrtp_low = price_to_sqrtp(price_low)
    sqrtp_cur = price_to_sqrtp(price_cur)
    sqrtp_upp = price_to_sqrtp(price_upp)

    amount0 = amtliq0 * WAD
    amount1 = amtliq1 * WAD

    liq0 = liquidity0(amount0, sqrtp_cur, sqrtp_upp)
    liq1 = liquidity1(amount1, sqrtp_cur, sqrtp_low)
    liq  = Math.abs(Math.trunc(Math.min(liq0, liq1)))

    amount_in = amttrade1 * WAD

    price_diff = Math.abs(Math.trunc((amount_in * Q96)/liq))
    price_next = sqrtp_cur + price_diff

    amount_in = calc_amount1(liq, price_next, sqrtp_cur)
    amount_out = calc_amount0(liq, price_next, sqrtp_cur)

    return amount_out

}
