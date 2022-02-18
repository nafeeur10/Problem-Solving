func canConstruct(ransomNote string, magazine string) bool {
	ransomNoteMap := make(map[byte]int)
	magazineMap := make(map[byte]int)

	for i := 0; i < len(ransomNote); i++ {
		a := ransomNote[i]
		ransomNoteMap[a]++
	}

	for i := 0; i < len(magazine); i++ {
		a := magazine[i]
		magazineMap[a]++
	}

	for key := range ransomNoteMap {
		if ransomNoteMap[key] > magazineMap[key] {
			return false
		}
	}

	return true
}
