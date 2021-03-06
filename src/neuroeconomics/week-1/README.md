# W1: Introduction To Neuroscience

- :ballot_box_with_check: History of Neuroeconomics
- :ballot_box_with_check: Recap of basic economics
- :soon: Recap of basic economics
- :white_check_mark:
- Categorical vs. parametric design !!

## Introduction to Neuroscience

## fMRI Analysis

fMRI stands fro Functional Magnetic Resonance Imaging and is used to detect where oxiginated blood in the brain is located to gather insights about the activity within the brain.

The _BOLD_ contrast stands for _Blood-Oxygen-Level-Dependent_ Contrast and is the method that allows us to local neural activity in the brain.

A _voxel_ is the smallest 3-dimensional unit of imaging which constitutes the visualisation of activity in the brain.

### Use-cases for fMRI

**Task-based fMRI**
What: to find out how the brain is processing short (1-30s) stimuli and tasks. The more intense the stimuli is, the higher the neural activation.

### What are parametric and categorical designs? Blocked and related designs?

[2-minute](https://www.youtube.com/watch?v=rJjHjnzmvDI), [Basic of fMRI (slides)](https://afni.nimh.nih.gov/pub/dist/edu/latest/afni_handouts/FMRI_basics.pdf), [more details](https://afni.nimh.nih.gov/pub/dist/doc/papers/Absolute_Beginner_Cox_ISMRM_2011.pdf).

## Multiple Hypotheses Testing

The _Multiple Comparisons Problem_ occurs when you consider multiple statistical inferences simultaneously on the _same_ sample of data.

A short introduction video on [the multi comparisons problem](https://www.youtube.com/watch?v=dzi1CSvzCoU)  
A [reference study](https://www.psychology.mcmaster.ca/bennett/psy710/readings/BennettDeadSalmon.pdf) to illustrate the problem.

### Example

Let's imagine you are testing 20 hypotheses at the same time, each at a [significance level](/statistics/terminology.html#significance-level-%CE%B1) of 5%.

The fundamental question is: _What's the probability of observing at least one significant result just by chance?_ In other words: How likely is it that we get a false positive (aka [Type I error](/statistics/terminology.html#type-i-and-type-ii-errors))?

$\mathbb{P}(\text{Probability of at least one significant result by chance}) = 1 - \mathbb{P}(\text{no significant result})$  
$= 1 - (1 - 0.05)^{20}$  
$\approx 0.64$

This example illustrates that with 20 tests (hypotheses), we have a probability of 64% of observing at least one significant result even if the tests in reality are not significant. Simply, we have a likelihood of 64% of making a Type I error which is much higher than a typical significance level of around 5%.

### What to do about it?

As our signifcance level ?? increases above our desired threshold of 5% as we test multiple hypotheses, we need to somehow adjust the ?? so we reduce the probability of observing at least one significant result due to chance.

There are different methods which can be applied to adjust the ?? when running a multi hypotheses test. Namely the _Bonferroni Correction_, the _False Discovery Rate_, and the _Familywise Error Rate_.

The familywise error rate is defined as:

$\alpha_{fw}=1-(1-\alpha_c)^k$

Where $\alpha_c$ is the level of significance for one comparison and $k$ is the total number of comparisons being conducted.

[This paper](https://www.stat.berkeley.edu/~mgoldman/Section0402.pdf) explains the Bonferroni Correction & False Discovery Rate very well.

### What does it mean in neuroscience?

A typical fMRI scan is made up of more than 100.000 voxels. Each of those voxels can be seen as one hypothesis you want to test. As you can imagine, this makes it nearly impossible to get any significant findings as the unadjusted ?? (probability to get a false positive) will be extremely high. Hence, in every modern study, the ?? needs to be corrected to enable researchers to get real conclusions.

## Reverse Inference

https://www.sciencedirect.com/science/article/abs/pii/S1364661305003360
