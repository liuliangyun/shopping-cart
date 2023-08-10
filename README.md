第一周：
实现两个页面，页面样式没有要求。接口使用trainer提供的mock api。

* 产品列表页面
* 展示产品列表，产品item需要显示商品名称，价格，描述，添加到购物车按钮。
* 购物车页面
* 购物车有优惠：满1000 - 150。购物车需要显示商品总价（原价），折扣优惠金额，折扣后实际金额
* 展示购物车中的商品，可调整每个商品的数量，从购物车中删除商品。购物车item需要显示每个商品原价以及优惠后的价格（例，一件商品200元，一件800元。两件商品分别的优惠后价格是170和680元）

mock server: https://github.com/demongodYY/fake-shopping-cart-server

第二周

* 将购物车读写改成local storage，不再调用
* 额外增加多种优惠方式，可在购物车选择：整体打九折，满1000-150，3000-500，不使用优惠，进入页面默认采用最优惠价格。


Tasking:

* 初始化项目目录，搭建两个页面即产品列表页和购物车页
* 产品列表页：ProductList -> ProductItem(name, price, description, addToCart)
    * ProductList：
        * 加载时请求产品列表数据
        * 展示产品列表数据
    * ProductItem：
        * 展示产品数据
        * 支持将产品添加到购物车
* 购物车页：ShoppingCart -> CartItem(name, count, price, totalPrice)
    * ShoppingCart:
        * 加载时请求购物车列表数据
        * 展示购物车列表数据
        * 展示购物车列表总价
        * 根据优惠方式展示购物车列表优惠后的总价
    * CartItem:
        * 展示购物车单项数据
        * 支持增加单项的数量
        * 支持减少单项的数量
        * 根据优惠方式展示单项优惠后的价格
    
