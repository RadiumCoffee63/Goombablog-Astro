import { chartInstances, labelStates } from './Graph.astro.0.mts';

export function toggleLabels(containerId: string) {
const container = document.getElementById(containerId);
if (!container) return;
const chart = chartInstances.get(container);
if (!chart) return;

const newState = !labelStates.get(containerId);
labelStates.set(containerId, newState);

const currentOption = chart.getOption();
if (currentOption.series && currentOption.series[0]) {
const series = currentOption.series[0];
series.label.show = newState;
if (series.data) series.data.forEach((node: any) => { if (node.label) node.label.show = newState; });
if (series.edges) series.edges.forEach((edge: any) => { if (edge.label) edge.label.show = newState && !!(edge.value || edge.label.formatter); });
chart.setOption(currentOption);
}

// 只改这里：显式管理 active 类名，确保不会变蓝无法回退
const button = document.querySelector(`.label-toggle-btn[data-target="${containerId}"]`) as HTMLElement;
if (button) {
newState ? button.classList.add('active') : button.classList.remove('active');
}
}
