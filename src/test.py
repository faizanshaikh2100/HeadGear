from autoscraper import AutoScraper
amazon_url="https://www.amazon.in/s?k=headphones"
wantedList=["399","boAt BassHeads 100 in-Ear Wired Headphones with Mic (Black)","388,021","boAt","BassHeads 100","Wired"]

scraper = AutoScraper()
result = scraper.build(amazon_url,wantedList)
print(result)

scraper.get_result_similar(amazon_url,grouped=True)
scraper.set_rule_aliases({

})