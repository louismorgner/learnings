# W3: Intertemporal Choice

- Axioms of discounted utility

## Hyperbolic discounting, quasi-hyperbolic discounting, beta-delta preferences

### Hyperbolic Discounting

Hyperbolic discounting offers an explanation to why people value small, immediate rewards more than large future rewards.

When we are confronted with a decision in the future, willpower does not really exist. We just make the decision which yields the highest reward (e.g. working out, building up savings, eating healthy). However when it comes to the point in time where we need to decide, we make unpoptimal decisions.

::: tip Example
Two groups at a business conference were asked two questions.

Group A: What would you like for a break time snack a week from now?
Group B: What would you like for a break time snack coming up in 20 minutes?

Both groups had to choose between sweets and fruits.

The outcome was that 74% of people from Group A aimed for a healthy fruit snack whereas only 30% of Group B did so.
:::

[Introduction to Hyperbolic Discounting](https://www.youtube.com/watch?v=uBhhTpvd2Og)
[Longer Explaination of Beta-Delta Model](https://www.youtube.com/watch?v=6p0J6gFwQ1c)

### Classical Discounting Utility Model

$100+\frac{100}{1+r}+\frac{100}{(1+r)^2}+\frac{100}{(1+r)^3}+...$

$r$ is equal to the discount rate for utility.

This can be also expressed using $\delta$ where $\delta=\frac{1}{1+r}$

### Beta-Delta Model

$100+\beta\frac{100}{1+r}+\beta\frac{100}{(1+r)^2}+\beta\frac{100}{(1+r)^3}+...$

where $\beta < 1$.

Beta can be seen as the _haze_ we humans have when looking into the future as our choices are time inconsistent. We need to beta-delta model to model this flaw in our human decision making.

### Overview

Exponential Model
$DU(x,t)=\delta^tU(x) = \frac{U(x)}{(1+r)^t}$

Exponential Model:
$DU(x,t)= \frac{U(x)}{(1+r)^t}$

Hyperbolic:
$DU(x,t) = \frac{U(x)}{1+kt}$

Quasi Hyperbolic:
$DU(x,t) = \beta\frac{U(x)}{(1+r)^t}$

$U_{\text{classic}}(\text{learn today}) = -120 + \frac{10}{1.05} + \frac{10}{1.05^2} + \frac{10}{1.05^3} + ... = 80$

$U_{\text{classic}}(\text{learn tomorrow}) = -0 + \frac{-120}{1.05} + \frac{10}{1.05^2} + \frac{10}{1.05^3} + ... = 76.19$

$U_{\beta\delta}(\text{learn today}) = -120 + 0.9\frac{10}{1.05} + 0.9\frac{10}{1.05^2} + 0.9\frac{10}{1.05^3} + ... = 60$

$U_{\beta\delta}(\text{learn tomorrow}) = -0 + 0.9\frac{-120}{1.05} + 0.9\frac{10}{1.05^2} + 0.9\frac{10}{1.05^3} + ... = 68$

https://economics.stackexchange.com/questions/27499/the-beta-delta-model

Good explanation of event vs block design: https://afni.nimh.nih.gov/pub/dist/HOWTO/howto/ht03_stim/html/stim_background.html
