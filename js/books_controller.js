var app = angular.module('myBookshelf', []);

app.controller('BooksController', ['$scope', function($scope) {

	$scope.books = [
		{
			'title': 'The Subtle Art of Not Giving a F*ck',
			'author': 'Mark Manson',
			'url': 'https://www.amazon.in/Subtle-Art-Not-Giving/dp/0062641549',
			'hasMediumPost': false,
			'mediumPostUrl': '',
			'read': true
		},
		
		{
			'title': 'Getting Things Done: The Art of Stress-free Productivity',
			'author': 'David Allen',
			'url': 'https://www.amazon.in/Getting-Things-Done-Stress-free-Productivity/dp/0349410151',
			'hasMediumPost': false,
			'mediumPostUrl': '',
			'read': true
		},
		
		{
			'title': 'Rich Dad Poor Dad: What the Rich Teach their Kids About Money that the Poor and Middle Class Do Not!',
			'author': 'Robert T Kiyosaki',
			'url': 'https://www.amazon.in/Rich-Dad-Poor-Middle-Updates/dp/1612680194',
			'hasMediumPost': false,
			'mediumPostUrl': '',
			'read': true
		},
		
		{
			'title': 'Deep Work: Rules for Focused Success in a Distracted World',
			'author': 'Cal Newport',
			'url': 'https://www.amazon.in/Deep-Work-Focused-Success-Distracted/dp/0349413681',
			'hasMediumPost': false,
			'mediumPostUrl': '',
			'read': true
		},
		
		{
			'title': 'The Daily Stoic: 366 Meditations on Wisdom, Perseverance, and the Art of Living: Featuring new translations of Seneca, Epictetus, and Marcus Aurelius',
			'author': 'Ryan Holiday',
			'url': 'https://www.amazon.in/Daily-Stoic-Meditations-Perseverance-translations/dp/1781257655',
			'hasMediumPost': false,
			'mediumPostUrl': '',
			'read': true
		},
		
		{
			'title': 'Who was Shivaji?',
			'author': 'Govind Pansare',
			'url': 'https://www.amazon.in/Shivaji-Anirudh-Deshpande-Prabhat-Patnaik/dp/9380118139',
			'hasMediumPost': false,
			'mediumPostUrl': '',
			'read': true
		},
		
		{
			'title': 'Unf*ck Yourself: Get Out of Your Head and into Your Life',
			'author': 'Gary John Bishop',
			'url': 'https://www.amazon.in/Unf-Yourself-Your-Head-into/dp/1473671566',
			'hasMediumPost': false,
			'mediumPostUrl': '',
			'read': true
		},
	];

}]);
