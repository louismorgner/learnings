# Statistics Terminology

## Null Hypothesis (H0)

The null hypothesis always assumes there is no effect. The alternative hypothesis assumes an effect. We either _reject the null_ or _fail to reject the null_.

## P-value

Given the [null hypothesis](#null-hypothesis-h0) is true, what's the probability to observe a result as extreme by chance?

::: tip
The higher the p-value, the more evidence against the alternative hypothesis.
The lower the p-vlue, the more evidence to reject the null.
:::

![Visualization of p values in a distribution](./assets/p-value.png)

## Significance level (α)

The significance level represents the cutoff point for rejecting the null hypothesis. Typicall levels range from 5% to 1%. It can also be seen as the probability of making the mistake that you reject the null when in fact it is true.

::: tip
The α-level is the probability of making a type 1 error
:::

## Type I and Type II Errors

::: tip
Type I errors are false positives. Type II errors are false negatives.
:::

![Table](./assets/type-errors.jpg)
![Error distributino](./assets/error-dist.png)
