const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    values: [20, 25, 30, 35, 40, 45, 50]
};

for (let i = 0; i < data.values.length; i++) {
    const randomVariation = Math.random() * 10 - 5;
    data.values[i] += randomVariation;
}

const canvas = document.getElementById('myChart');
const ctx = canvas.getContext('2d');

const startX = 50;
const startY = canvas.height - 50;
const maxValue = Math.max(...data.values);
const graphWidth = canvas.width - startX - 20;

ctx.beginPath();
ctx.moveTo(startX, startY);

for (let i = 0; i < data.labels.length; i++) {
    const x = startX + (graphWidth / (data.labels.length - 1)) * i;
    const y = startY - (data.values[i] / maxValue) * (canvas.height - 80);
    ctx.lineTo(x, y);

    if (i > 0 && data.values[i] - data.values[i - 1] > 5) {
        ctx.strokeStyle = 'red';
    } else {
        ctx.strokeStyle = 'blue';
    }

    ctx.lineWidth = 2;
    ctx.stroke();
}

for (let i = 0; i < data.labels.length; i++) {
    const x = startX + (graphWidth / (data.labels.length - 1)) * i;
    const y = canvas.height - 10;
    ctx.fillStyle = 'black';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(data.labels[i], x, y);
}

ctx.save();
ctx.translate(10, canvas.height / 2);
ctx.rotate(-Math.PI / 2);
ctx.textAlign = 'center';
ctx.fillText('Visitors', 0, 0);
ctx.restore();
