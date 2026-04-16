若$y' + c(x)y \le f(x)$成立，则有下不等式成立：
$$y \le e^{-\int_a^x c(t)dt} \left( \int_a^x f(s) e^{\int_a^x c(t)dt} ds + y(a) \right)$$
该不等式和[[一阶线性常微分方程的通解]]中的证明思路完全一致，只是加了个不等式

上述的是广义形式，下面来看一般形式

>[!tip] 假设 $u(t), \alpha(t), \beta(t)$ 为连续非负函数，且满足：
$$u(t) \le \alpha(t) + \int_{t_0}^t \beta(s)u(s)ds$$
若 $\alpha(t)$ 是非减常数，则：
$$u(t) \le \alpha(t) e^{\int_{t_0}^t \beta(s)ds}$$


