function sortByLength (array) {
  // Return an array containing the same strings, ordered from shortest to longest
};



Test.describe("Example tests",function(){
  Test.it("Test 1",function(){
    Test.assertSimilar(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);
  });
  Test.it("Test 2",function(){
    Test.assertSimilar(sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);
  });
  Test.it("Test 3",function(){
    Test.assertSimilar(sortByLength(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"]);
  });
});
