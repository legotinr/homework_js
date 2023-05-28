function pow(num, degree) {
        return (degree === 1) ? num : num * pow(num, degree - 1);
}

result = pow(-2, 9);
console.log(result);