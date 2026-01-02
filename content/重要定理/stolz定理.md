
> [!theorem] 定理 1.1 (Stolz-Cesàro 定理)
> 若序列 $\{y_n\}$ 满足：
> 1. $y_{n+1} > y_n$ (对于 $n=1, 2, \dots$)
> 2. $\lim_{n \to \infty} y_n = +\infty$
> 
> 且极限 $\lim_{n \to \infty} \frac{x_{n+1} - x_n}{y_{n+1} - y_n}$ 存在, 那么 $\lim_{n \to \infty} \frac{x_n}{y_n}$ 也存在, 并且
> $$
> \lim_{n \to \infty} \frac{x_n}{y_n} = \lim_{n \to \infty} \frac{x_{n+1} - x_n}{y_{n+1} - y_n} \tag{1.1}
> $$

(切萨罗(Cesàro)平均定理的推广形式)
> [!theorem] 定理 1.2 (扩展 Stolz 定理)
> 设 $(a_n)$ 和 $(b_n)$ 是两个数列，且 $(b_n)$ 是严格单调递增（或严格单调递减）的。
> 
> 1. **$\frac{\infty}{\infty}$ 型**：如果 $\lim_{n \to \infty} b_n = +\infty$ (或 $-\infty$)，并且极限 $\lim_{n \to \infty} \frac{a_{n+1} - a_n}{b_{n+1} - b_n}$ 存在（有限或无限），那么
>     $$ \lim_{n \to \infty} \frac{a_n}{b_n} = \lim_{n \to \infty} \frac{a_{n+1} - a_n}{b_{n+1} - b_n} \tag{1.2} $$
> 
> 2. **$\frac{0}{0}$ 型**：如果 $\lim_{n \to \infty} a_n = 0$ 且 $\lim_{n \to \infty} b_n = 0$，并且极限 $\lim_{n \to \infty} \frac{a_{n+1} - a_n}{b_{n+1} - b_n}$ 存在（有限），那么
>     $$ \lim_{n \to \infty} \frac{a_n}{b_n} = \lim_{n \to \infty} \frac{a_{n+1} - a_n}{b_{n+1} - b_n} \tag{1.3} $$

### 分析与转化

证明该定理的核心思想是将其转化为一个等价的命题，该命题是柯西的一个著名结论。

我们引入两个新的数列 $\{X_n\}$ 和 $\{Y_n\}$：
- 令 $X_1 = x_1$, 且 $X_{n+1} = x_{n+1} - x_n$ (对于 $n \ge 1$)
- 令 $Y_1 = y_1$, 且 $Y_{n+1} = y_{n+1} - y_n$ (对于 $n \ge 1$)

通过这种代换，我们可以将 $x_n$ 和 $y_n$ 表示为新数列的部分和：
$$ x_n = \sum_{i=1}^{n} X_i \tag{1.4} $$
$$ y_n = \sum_{i=1}^{n} Y_i \tag{1.5} $$

原定理的条件相应地转化为新数列的三个条件：
1. $Y_n = y_n - y_{n-1} > 0$ (对于 $n \ge 2$)
2. $\lim_{n \to \infty} \sum_{i=1}^{n} Y_i = \lim_{n \to \infty} y_n = +\infty$
3. 极限 $\lim_{n \to \infty} \frac{X_n}{Y_n}$ 存在。

于是，原定理的结论就等价于证明：
$$
\lim_{n \to \infty} \frac{X_1 + X_2 + \dots + X_n}{Y_1 + Y_2 + \dots + Y_n} = \lim_{n \to \infty} \frac{X_n}{Y_n} \tag{1.6}
$$

### 证明过程

设 $\lim_{n \to \infty} \frac{X_n}{Y_n} = a$。我们的目标是证明 $\lim_{n \to \infty} \frac{\sum_{i=1}^n X_i}{\sum_{i=1}^n Y_i} = a$。

根据极限的定义，$\lim_{n \to \infty} \frac{X_n}{Y_n} = a$ 意味着 $\frac{X_n}{Y_n} = a + \alpha_n$，其中 $\lim_{n \to \infty} \alpha_n = 0$。
由此可得 $X_n = aY_n + \alpha_n Y_n$。

对于任意给定的 $\epsilon > 0$，根据极限的定义，存在一个正整数 $N_1$，使得当 $n > N_1$ 时，有 $|\alpha_n| < \frac{\epsilon}{2}$。

令 $\xi_n = \frac{\sum_{i=1}^n X_i}{\sum_{i=1}^n Y_i}$。我们来估计 $|\xi_n - a|$ 的值。对于 $n > N_1$：
$$\begin{align*}
|\xi_n - a| &= \left| \frac{\sum_{i=1}^n X_i}{\sum_{i=1}^n Y_i} - a \right| \\
&= \left| \frac{\sum_{i=1}^n (X_i - aY_i)}{\sum_{i=1}^n Y_i} \right| \\
&= \left| \frac{\sum_{i=1}^n \alpha_i Y_i}{\sum_{i=1}^n Y_i} \right| \\
&= \left| \frac{\sum_{i=1}^{N_1} \alpha_i Y_i + \sum_{i=N_1+1}^{n} \alpha_i Y_i}{\sum_{i=1}^n Y_i} \right| \\
&\le \left| \frac{\sum_{i=1}^{N_1} \alpha_i Y_i}{\sum_{i=1}^n Y_i} \right| + \left| \frac{\sum_{i=N_1+1}^{n} \alpha_i Y_i}{\sum_{i=1}^n Y_i} \right| \quad \text{(分段估计)} \tag{1.7}
\end{align*}$$

**对于第二项：**
因为当 $i > N_1$ 时，$|\alpha_i| < \frac{\epsilon}{2}$ 且 $Y_i > 0$，所以：
$$
\left| \frac{\sum_{i=N_1+1}^{n} \alpha_i Y_i}{\sum_{i=1}^n Y_i} \right| \le \frac{\sum_{i=N_1+1}^{n} |\alpha_i| Y_i}{\sum_{i=1}^n Y_i} < \frac{\sum_{i=N_1+1}^{n} \frac{\epsilon}{2} Y_i}{\sum_{i=1}^n Y_i} = \frac{\epsilon}{2} \frac{\sum_{i=N_1+1}^{n} Y_i}{\sum_{i=1}^n Y_i} \le \frac{\epsilon}{2} \tag{1.8}
$$

**对于第一项：**
由于 $N_1$ 是一个固定的整数，所以分子 $\sum_{i=1}^{N_1} \alpha_i Y_i$ 是一个常数。
又因为条件 (2) 保证了 $\lim_{n \to \infty} \sum_{i=1}^n Y_i = +\infty$。
因此，对于给定的 $\epsilon > 0$，存在一个正整数 $N > N_1$，使得当 $n > N$ 时，分母 $\sum_{i=1}^n Y_i$ 足够大，从而满足：
$$
\left| \frac{\sum_{i=1}^{N_1} \alpha_i Y_i}{\sum_{i=1}^n Y_i} \right| < \frac{\epsilon}{2} \tag{1.9}
$$

**结论：**
综合以上两部分的估计，对于任意 $\epsilon > 0$，我们找到了一个 $N$，使得当 $n > N$ 时：
$$
|\xi_n - a| \le \left| \frac{\sum_{i=1}^{N_1} \alpha_i Y_i}{\sum_{i=1}^n Y_i} \right| + \left| \frac{\sum_{i=N_1+1}^{n} \alpha_i Y_i}{\sum_{i=1}^n Y_i} \right| < \frac{\epsilon}{2} + \frac{\epsilon}{2} = \epsilon \tag{1.10}
$$
根据极限的定义，这表明 $\lim_{n \to \infty} \xi_n = a$。
证明完毕。 $\square$

> [!note] 应用总结
> **关键条件：**
> - 分母数列 $(b_n)$ 必须是**严格单调**的
> - 分母数列 $(b_n)$ 的极限必须是 $\infty$（对于 $\frac{\infty}{\infty}$ 型）或 $0$（对于 $\frac{0}{0}$ 型）
> - 差分比的极限 $\lim_{n \to \infty} \frac{a_{n+1} - a_n}{b_{n+1} - b_n}$ 必须存在
> 
> **应用场景：**
> 极限遇到 $\frac{\infty}{\infty}$ 或 $\frac{0}{0}$ 型不定式时，Stolz定理可以简化计算

---
*标签： #数学分析 #极限理论 #Stolz定理 #Cesàro定理 #分段估计*
