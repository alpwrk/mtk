const KMH_TO_MPH = 0.621371;
const MPH_TO_KMH = 1.609344;

const kmhInput = document.getElementById('kmh');
const mphInput = document.getElementById('mph');
const clearBtn = document.getElementById('clear');

function format(value) {
    if (!isFinite(value)) return '';
    return (Math.round(value * 100) / 100).toFixed(2);
}

kmhInput.addEventListener('input', () => {
    if (kmhInput.value === '') {
        mphInput.value = '';
        return;
    }
    const kmh = parseFloat(kmhInput.value);
    mphInput.value = format(kmh * KMH_TO_MPH);
});

mphInput.addEventListener('input', () => {
    if (mphInput.value === '') {
        kmhInput.value = '';
        return;
    }
    const mph = parseFloat(mphInput.value);
    kmhInput.value = format(mph * MPH_TO_KMH);
});

clearBtn.addEventListener('click', () => {
    kmhInput.value = '';
    mphInput.value = '';
    kmhInput.focus();
});
