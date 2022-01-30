func checkString(s string) bool {
	bFlag := false
	for i := 0; i < len(s); i++ {
		if s[i] == 'b' {
			bFlag = true
			continue
		}

		if bFlag == true && s[i] == 'a' {
			return false
		}
	}

	return true
}
