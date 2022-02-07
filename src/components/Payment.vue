<template>
    <section>
        <!-- ... -->
        <span>총 주문금액</span>
        <span>15,000 원</span><br>
        <!--        <button id="payment-button">15,000원 결제하기</button>-->
        <button
                id="payment-button"
                style="height: 31px; margin-top: 5px;"
                class="btn-sm btn btn-outline-secondary no-outline"
                @click.prevent="pay"
        >
            15,000원 결제하기
        </button>
    </section>
</template>

<script>
    import {loadTossPayments} from '@tosspayments/payment-sdk'

    export default {
        name: "Payment",

        data() {
            return {
                clientKey: 'test_ck_0Poxy1XQL8R7ggAwWDL37nO5Wmlg',
            };
        },

        methods: {
            pay() {
                const clientKey = 'test_ck_0Poxy1XQL8R7ggAwWDL37nO5Wmlg';
                var button = document.getElementById('payment-button')
                // Promise를 사용하는 경우
                loadTossPayments(clientKey).then(tossPayments => {
                    button.addEventListener('click', function () {
                        tossPayments.requestPayment('카드', {
                            amount: 15000,
                            orderId: 's3xCbwY0WPHmnw0esgmvq',
                            orderName: '토스 티셔츠 외 2건',
                            customerName: '박토스',
                            successUrl: 'http://localhost:8080/success',
                            failUrl: 'http://localhost:8080/fail',
                        })
                    })
                })
            },
        }

    }

    // const tossPayments = loadTossPayments(clientKey)


</script>

<style scoped>
    .title {
        font-size: 30px;
        font-weight: 500;
    }

    .title1 {
        font-size: 24px;
        font-weight: 400;
    }

    .title2 {
        font-size: 20px;
        font-weight: 400;
    }

    .title3 {
        font-size: 16px;
        font-weight: 400;
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    .btn {
        border-color: #8585ad;
        color: #8585ad;
    }

    .btn:hover {
        background-color: #8585ad;
        border-color: #8585ad;
        color: white;
    }

    .btn:focus {
        background-color: #8585ad;
        border-color: #8585ad;
        color: white;
    }

    /deep/ .vue-tabs .nav-tabs {
        border: none;
        font-size: 20px;
        font-weight: 500;
        display: flex;

        justify-content: center;
    }

    /deep/ .vue-tabs .tabs__link {
        color: #a0a0a0;
    }

    /deep/ .vue-tabs .nav-tabs > li.active > a {
        background: transparent;
        border: none;
        transition: all 0.5s;
        padding-right: 0;
        padding-left: 0;
        margin-right: 15px;
        margin-left: 15px;
    }

    /deep/ .vue-tabs .nav-tabs > li > a:hover {
        background: transparent;
        color: #cbcbcb;
        transition: all 0.5s;
    }

    /deep/ .vue-tabs .nav-tabs > li > a {
        background: transparent;
        border: none;
        transition: all 0.5s;
    }

    /deep/ .vue-tabs .nav-tabs > li > a:after {
        content: "";
        width: 20%;
        position: absolute;
        bottom: 3px;
        border-width: 0 0 2px;
        border-style: solid;
        transition: all 0.5s;
    }

    /deep/ .vue-tabs .nav-tabs > li.active > a:after {
        width: 100%;
        transition: all 0.5s;
    }

    .design-img {
        width: 100%;
        border-radius: 15px;
        transition: all 0.5s;
    }

    .dimg {
        position: relative;
        border-radius: 15px;
    }

    .middle {
        transition: all 0.5s;
        opacity: 0;
        position: absolute;
        bottom: 0px;
        left: 70px;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
        padding: 20px;
    }

    .dimg:hover .design-img {
        position: relative;
        border-radius: 15px;
        opacity: 0.1;
        cursor: pointer;
    }

    .dimg:hover .middle {
        opacity: 1;
    }

    /deep/ .vueperslide {
        border-radius: 10px !important;
    }

    /deep/ .vueperslides__parallax-wrapper {
        border-radius: 10px !important;
    }

    .btn {
        border-color: #759CC9;
        color: #759CC9;
    }

    .btn:hover {
        background-color: #759CC9;
        border-color: #759CC9;
        color: white;
    }

    .btn:focus {
        background-color: #759CC9;
        border-color: #759CC9;
        color: white;
    }

    /deep/ .vueperslides__arrow {
        outline: none !important;
        border: none;
        color: grey;
    }

    .badge {
        background-color: #bbd4dd;
        transition: all 0.5s;
        font-weight: 500;
        font-size: 13px;
    }

    .bg-dark4 {
        background-color: #494e55 !important;
    }

    .date {
        font-size: 14px;
        font-weight: 400;
        opacity: 0.75
    }
</style>
