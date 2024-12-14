$(document).ready(function() {
    let cart = [];
    let total = 0;

    function updateCart() {
        $('#cart-items').empty();
        cart.forEach(item => {
            $('#cart-items').append(`<li>${item.name} - ₹${item.price}</li>`);
        });
        $('#total-price').text(total);
        $('#cart-count').text(cart.length);
    }

    $('.add-to-cart').on('click', function() {
        const product = $(this).closest('.product');
        const id = product.data('id');
        const name = product.data('name');
        const price = product.data('price');

        cart.push({ id, name, price });
        total += price;
        updateCart();

        alert(`${name} added to cart!`);
    });

    $('.cart-button').on('click', function() {
        $('.cart').toggle();
    });

    $('#checkout').on('click', function() {
        if (cart.length > 0) {
            alert('Thank you for your purchase! Your order has been placed.');
            cart = [];
            total = 0;
            updateCart();
            $('.cart').hide();
        } else {
            alert('Your cart is empty.');
        }
    });
});
