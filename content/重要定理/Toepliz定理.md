> [!note] Silverman-Toepliz定理,1913
> $\{a_{nk}\},n\geq k\geq 1$是一个非负的双重序列，并且满足:
> 1. 关于$k$的和为1，即:$$\sum_{k=1}^na_{nk}=1$$
> 2. 当$k$固定的时候，$$\lim_{n\to \infty}a_{nk}=0$$
> 
> 那么对于任意的有极限的序列$x_n$，都有$$\lim_{n\to \infty}\sum_{k=1}^{n}a_{nk}x_k=\lim_{n\to \infty}x_n$$

不失一般性，由条件1，我们只讨论x_n趋于0时的情况。运用[[03分段估计]]的思想，不妨设求和等于$S_n$，先证收敛的情况，由收敛可知$\{x_n\}$有界不妨设为M，则
$$
\begin{aligned} |S_n |&\le\sum_{k=1}^{n}|a_{nk}x_k| \\&=\sum_{k=1}^{N_0}|a_{nk}x_k|+\sum_{k>N_0}^{n}|a_{nk}x_k|\\ & < M\sum_{k=1}^{N_0}|a_{nk}|+\epsilon\sum_{k=1}^{n}a_{nk}\end{aligned}
$$
$n \rightarrow \infty$时，左边是有限个无穷小的和，右边是1乘以$\epsilon$，所以$\{S_n\}$极限为0，得证.

> [!note] Silverman-Toeplitz定理的一般形式
> 设 $\{a_k\}$ 是数列，$\{c_{n,k}\}$ 是双指标数列，满足：
> 1. $\lim_{k \to \infty} a_k = L$
> 2. $\lim_{n \to \infty} c_{n,k} = 0$（固定 $k$）
> 3. $\lim_{n \to \infty} \sum_{k=1}^{\infty} c_{n,k} = 1$
> 4. $\sup_n \left( \sum_{k=1}^{\infty} |c_{n,k}| \right) < M$（$M$ 为有限常数）
> 
> 则变换 $t_n = \sum_{k=1}^{\infty} c_{n,k} a_k$ 满足 $\lim_{n \to \infty} t_n = L$

#### 第一步：证明 $L = 0$ 的情况
**已知**：$\lim_{k \to \infty} a_k = 0$，以及条件2, 4。
**要证明**：$\lim_{n \to \infty} t_n = 0$。
根据极限定义，对于任意 $\epsilon > 0$，必须找到 $N$，使得 $n > N$ 时恒有 $|t_n| < \epsilon$。
**证明**：
分析 $a_k$：
   - 由 $\lim_{k \to \infty} a_k = 0$，对任意 $\epsilon > 0$，存在正整数 $K$，使得当 $k > K$ 时，$|a_k| < \frac{\epsilon}{2M}$
   - 收敛数列 $\{a_k\}$ 有界，设 $A = \sup_k |a_k|$
**拆分求和**：
$$
   |t_n| = \left| \sum_{k=1}^{\infty} c_{n,k} a_k \right| \le \sum_{k=1}^{\infty} |c_{n,k}| |a_k|
   $$$$
   |t_n| \le \underbrace{\sum_{k=1}^{K} |c_{n,k}| |a_k|}_{\text{头部}} + \underbrace{\sum_{k=K+1}^{\infty} |c_{n,k}| |a_k|}_{\text{尾部}}
   $$
Part 1:
**控制尾部**：当 $k > K$ 时，$|a_k| < \frac{\epsilon}{2M}$
$\begin{aligned} \text{尾部} &= \sum_{k=K+1}^{\infty} |c_{n,k}| |a_k| \\& < \sum_{k=K+1}^{\infty} |c_{n,k}| \left( \frac{\epsilon}{2M} \right)\\&= \frac{\epsilon}{2M} \sum_{k=K+1}^{\infty} |c_{n,k}| \\&\le \frac{\epsilon}{2M} \sum_{k=1}^{\infty} |c_{n,k}| \end{aligned}$
由条件4，$\sum_{k=1}^{\infty} |c_{n,k}| < M$
故 $\text{尾部} < \frac{\epsilon}{2M} \cdot M = \frac{\epsilon}{2}$
Part 2:
**控制头部**：
$\text{头部} = \sum_{k=1}^{K} |c_{n,k}| |a_k|$
由条件2，$\lim_{n \to \infty} c_{n,k} = 0$（固定 $k$）
 $\lim_{n \to \infty} \text{头部} = \sum_{k=1}^{K} \left( \lim_{n \to \infty} |c_{n,k}| \right) |a_k| = \sum_{k=1}^{K} 0 \cdot |a_k| = 0$
 存在 $N$，当 $n > N$ 时，$\text{头部} < \frac{\epsilon}{2}$

 **综合**：
当 $n > N$ 时：
$$
     |t_n| \le \text{头部} + \text{尾部} < \frac{\epsilon}{2} + \frac{\epsilon}{2} = \epsilon
     $$
故 $\lim_{n \to \infty} t_n = 0$

#### 第二步：证明 $L$ 为任意值的情况

**已知**：$\lim_{k \to \infty} a_k = L$，以及条件2, 3, 4
**要证明**：$\lim_{n \to \infty} t_n = L$
**证明**：
1. **构造新数列**：
   令 $b_k = a_k - L$，则 $\lim_{k \to \infty} b_k = 0$
2. **应用第一步结论**：
   令 $t_n' = \sum_{k=1}^{\infty} c_{n,k} b_k$，由第一步知 $\lim_{n \to \infty} t_n' = 0$
3. **展开 $t_n'$**：
$$
   t_n' = \sum_{k=1}^{\infty} c_{n,k} (a_k - L) = \sum_{k=1}^{\infty} c_{n,k} a_k - \sum_{k=1}^{\infty} c_{n,k} L
   $$ $$
   t_n' = t_n - L \left( \sum_{k=1}^{\infty} c_{n,k} \right)
   $$
4. **移项取极限**：
5. $$
   t_n = t_n' + L \left( \sum_{k=1}^{\infty} c_{n,k} \right)
   $$$$
   \lim_{n \to \infty} t_n = \lim_{n \to \infty} t_n' + L \cdot \left( \lim_{n \to \infty} \sum_{k=1}^{\infty} c_{n,k} \right)
   $$
6. **代入已知**：
   - $\lim_{n \to \infty} t_n' = 0$
   - 由条件3，$\lim_{n \to \infty} \sum_{k=1}^{\infty} c_{n,k} = 1$
   - 故 $\lim_{n \to \infty} t_n = 0 + L \cdot 1 = L$

**Q.E.D.**
注：第一个命题中我们令$\{a_{nk}\}$非负，而在第二个证明里面我们只对$\{c_{n,k}\}$的有界性做了限制

