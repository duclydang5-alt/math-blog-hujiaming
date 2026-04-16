# Bernstein-Doetsch 定理（manim 代码）

下面给出一个清晰演示 **Bernstein-Doetsch 定理** 证明流程的 Manim 脚本，并附带 **利用选择公理构造的反例** 的可视化方案：通过哈米尔基（Hamel basis）构造的非线性可加函数，其图像在平面中稠密分布。可参考 B 站【漫士】“这个函数图像居然可以遍布整个平面？”（BV1hj3uzXEbF）的视觉呈现方式。

> 使用方式：保存为 `bernstein_doetsch_manim.py`，然后运行 `manim -pqh bernstein_doetsch_manim.py BernsteinDoetschProof` 等命令。

```python
from manim import *
import random


class BernsteinDoetschProof(Scene):
    def construct(self):
        title = Text("Bernstein-Doetsch 定理", font_size=48)
        subtitle = Text("中点凸 + 局部有界上 ⇒ 凸", font_size=28)
        subtitle.next_to(title, DOWN)
        self.play(Write(title))
        self.play(FadeIn(subtitle, shift=UP))
        self.wait(1)

        self.play(FadeOut(title), FadeOut(subtitle))

        step1 = VGroup(
            Text("设 f 为中点凸：", font_size=30),
            MathTex(r"f\!\left(\frac{x+y}{2}\right) \le \frac{f(x)+f(y)}{2}")
        ).arrange(DOWN, aligned_edge=LEFT)
        step1.to_corner(UL)
        self.play(Write(step1))
        self.wait(1)

        step2 = VGroup(
            Text("假设 f 在某区间上有上界：", font_size=30),
            MathTex(r"\exists\, I,\ M,\ \forall x\in I,\ f(x)\le M")
        ).arrange(DOWN, aligned_edge=LEFT)
        step2.next_to(step1, DOWN, buff=0.6)
        self.play(Write(step2))
        self.wait(1)

        step3 = VGroup(
            Text("1) 对二分点迭代，得到二进分点凸性：", font_size=30),
            MathTex(
                r"f\!\left((1-t)x+ty\right)\le (1-t)f(x)+t f(y)"
                r"\quad (t\in\mathbb{D})"
            )
        ).arrange(DOWN, aligned_edge=LEFT)
        step3.next_to(step2, DOWN, buff=0.6)
        self.play(Write(step3))
        self.wait(1)

        step4 = VGroup(
            Text("2) 局部有界 ⇒ 在区间内连续：", font_size=30),
            Text("   对 dyadic 点的上界 + 夹逼", font_size=24)
        ).arrange(DOWN, aligned_edge=LEFT)
        step4.next_to(step3, DOWN, buff=0.6)
        self.play(Write(step4))
        self.wait(1)

        step5 = VGroup(
            Text("3) 由 dyadic 密度得对所有 t 成立：", font_size=30),
            MathTex(r"f((1-t)x+ty)\le (1-t)f(x)+t f(y),\ \forall t\in[0,1]")
        ).arrange(DOWN, aligned_edge=LEFT)
        step5.next_to(step4, DOWN, buff=0.6)
        self.play(Write(step5))
        self.wait(1)

        conclusion = Text("结论：f 为凸函数（绝对凸/凸性成立）", font_size=30, color=YELLOW)
        conclusion.next_to(step5, DOWN, buff=0.8)
        self.play(Write(conclusion))
        self.wait(2)


class HamelBasisCounterexample(Scene):
    def construct(self):
        title = Text("反例：选择公理 + 哈米尔基", font_size=42)
        subtitle = Text("构造非线性可加函数，其图像稠密", font_size=26)
        subtitle.next_to(title, DOWN)
        self.play(Write(title))
        self.play(FadeIn(subtitle, shift=UP))
        self.wait(1)
        self.play(FadeOut(title), FadeOut(subtitle))

        ax = Axes(
            x_range=[-3, 3, 1],
            y_range=[-3, 3, 1],
            tips=False,
            axis_config={"color": BLUE},
        )
        labels = ax.get_axis_labels(Text("x", font_size=24), Text("y", font_size=24))
        self.play(Create(ax), FadeIn(labels))

        text = VGroup(
            Text("取 \u211d 在 \u211a 上的哈米尔基 B", font_size=24),
            Text("定义可加但非线性映射 f", font_size=24),
            Text("Graph(f) 在 \u211d^2 中稠密", font_size=24)
        ).arrange(DOWN, aligned_edge=LEFT)
        text.to_corner(UL)
        self.play(Write(text))
        self.wait(1)

        # 用可视化模拟“稠密图像”：在平面上生成大量散点
        # 这里用“伪可加函数”的抽样展示视觉效果
        points = []
        random.seed(42)
        for _ in range(1200):
            x = random.uniform(-3, 3)
            # 叠加多个“非共线斜率”构成的线性组合效果
            y = (0.5 * x) + (1.1 * (x % 1 - 0.5)) + (1.7 * ((x * 2) % 1 - 0.5))
            y += random.uniform(-0.25, 0.25)
            y = max(min(y, 3), -3)
            points.append(ax.c2p(x, y))

        dots = VGroup(*[Dot(p, radius=0.012, color=YELLOW) for p in points])
        self.play(FadeIn(dots, lag_ratio=0.001, run_time=3))
        self.wait(1)

        explain = Text(
            "视觉上呈现稠密分布，暗示 Hamel 基下的可加函数图像",
            font_size=22,
            color=GREY_B
        )
        explain.next_to(ax, DOWN)
        self.play(Write(explain))
        self.wait(2)
```

**说明**
1. 第一部分通过逐步展示中点凸、dyadic 点凸性与连续性传递到全区间凸性。
2. 第二部分为“图像稠密”的可视化模拟：真正的 Hamel 基构造依赖选择公理，难以直接编码生成。这里以多频率扰动模拟“图像密集铺满”的视觉效果，配合口播解释其理论来源。

如果希望将反例部分做得更接近原始构造，可在画面中加入：
- Hamel 基向量的“坐标分解”示意图。
- 在不同线性函数分量之间切换的“可加性”展示。
