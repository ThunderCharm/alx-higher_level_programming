import urllib.request

def fetch_status(url):
    with urllib.request.urlopen(url) as response:
        data = response.read()
        content_type = response.getheader('Content-Type')
        
        print("Body response:")
        print("\t- type:", type(data))
        print("\t- content:", data)
        print("\t- utf8 content:", data.decode('utf-8'))
        print("\t- Content type:", content_type)

if __name__ == "__main__":
    fetch_status("https://alx-intranet.hbtn.io/status")

