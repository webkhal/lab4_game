function isPrime(N) {
	if (N == 1) return false;
	for (i = 2; i * i <= N; i++) {
		if (N % i == 0) return false;
	}
	return true;
}
