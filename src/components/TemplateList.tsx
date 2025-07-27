import React, { useState } from "react";
import TemplateCard from "././TemplateCard";
import { Toaster } from "react-hot-toast";

const templates = [
    {
      title: "Number to Roman",
      description: "Converts a number to its Roman numeral representation.",
      tags: ["Styling"],
      template_data: `H4sIAAAAAAAA/81YbVPqOhD+K0y/+KU6LVje7nhnVI5HHChzFVFQhwltoNG06UlTj8jw3++mvNhirfX1nE+Q7T6b7JPdp0lnyogy6y5Q6lczhdhKfTFW1OVvXRmHngVDxCfgBD4Cu0tv+BdZJCoaqIqNBFp5gXXWOBqaB916qWYYqsVcn3nYE0F9dq24xMMWR2NRt8JAMHfoMhvToQxwrdQ1NcXDQy6GZ1uAxg+CS78r+G8xyjj8v1bQrxCMABXwPLKYoTvCvCBY4ZS5yLtW5jfwmAhEiQUOY0QDHPcHh63E1PYU28PVDDM+GdV1zdD1clVTA4f9HhJvKBijgvh1bTRPQLFnOcgTrsxYgim+xxRyn7+KdIiNh8i2iSDMQ3TlJ4MkHWFZkpErScmIUTuW0hMrvx3YjYiWdNYmHE2TrB0y7x5zERRQwVsTSGDMJYnShjmiBYuFnsDcR1zsvMQsG43DwEICx9cWCE7usHA4CydO+jbAKPRszCnkuobOt24S6fucjQmVDMyIXb9q/qPrlYpRNSolTdWLu3qtaBSLurqtV4xiqWrsFqtq1ShXqsVKTb9RZTnBXI2j7eMf+w2YEsL5kDbBATC0fCqXFHIMG6jeIxpKE56eaINLR7MvT6g1bZZh3D3TaKd561eaXm86OmyWmy48P94vt6a1mK8h0IVB+6UTZ+D9F47cntYqnVJ8fKpb7vm92egXB7cHd4Nbq2h2Tbdz0X7s/DRpuzFwO43e7aBrPfRvnbt2g9LBRf/B7DZL5kW7ZD4eOGaXknb3XOs0+o8Dt2+YjVPXbOyX+uSkNr7U9uT2zOdqtGN1XQW2EjxSNMV86GAEVM8VcFQCygS04Vzd6HPfG2Iaa3RJE5hZKPxQgF1MfTm+RxwGPg2hTlb7qzB/Uc9rg40Di5PICpge4gSNKJbFFmARW0Yt7zKIl1gFFOqbV/GkGNaiC2Lr0J/zMYLuRJPYStgq0JGMLtcCj+tKMygcE9vGnpRSa+liT2HdxNoU26cJi2XYtlVsJRSE7kBOXRaJmRItJk2ygb3hYgdeUe2F0waJvf3W+Y8zsAcWi2iUPZhZFAueN8LomqbFucuHqiVAxXwgIwEq5QPtJkC7uZOKgYy8OcUw5bwpxTCVvBnFMNW8CWX2WXo+2S2Rnk8ck7MWduOYnKWgxzGlqHvW7XbIMbyIWiQQX9s6OzRq89zt864u1JO5yaxa2JsI56tyO+u3DzqtN+mCeBDP47QzRSEVctjO1IRUTCNTEdKnaWQKQjomUw5SIZeHmXKQimllqkH6NK1MNUjHZIpBKqR5ma0GqaBethqkT9TLloN00B+Vg2XLfIoevNp+3y4I0WUg+LAeZMrBy8crEw6JPrJwsD5ideGoXujJQ3qhjfmEeJP4WesM7hyRZTP5Z6etTciL9HHsQwW9kz3ySW+I7OLaKIp2KO+RFMdy4siCq5iMTji2hDzL+1HE5Rl6meQX1RCBO97DN7wrc4XJ2JJiksefWMj+iortq+pjeZX5GDOv8LtRHhcO3KaldzjaX9n+3ftriiUSnO8Q0j9SLd8txu8Kk5ObV3bq+cv7r9b5j0rc9zfydnbTWpQtPk280LVvR3wqY+uPSV9dywnO9uQnsv8B76EQmg8XAAA=`
    },
    {
      title: "Get Vector Directions",
      description: "Gets the pitch and yaw of a vector.",
      tags: ["Vector", "Math"],
      template_data: `H4sIAAAAAAAA/7WVbWvbMBDHv4oQlDTglSYlhfrdRuhWGNugpTDqEhRJsUVtyUjnpCH4u++kPKlJurZb+yrS+U73u/uflAUdl4Y/OJreLagSNF3uabL6Temk0Ry3zObohD4gq5U3roLFR4VNQgUDtvZC62J4Ofrx5SY9uxgMEm6q2mipwaWLjFZKS27ZBFLeODDVSLNKZjTt4Df5CJZlPklGuSmNxXVGrRQZTTIK+DkYvkogt5KDsWSoLC6U0S6j7T06KWCl4ug2YaWTcRQ6dJI4P57vE9/5zGNTiihom3xWYEkh/WG43LL5Hp0jjEwDYJZ1HKkV8IIwLciczU6eAzXjSeM4AxmDOLDqQUJhTZMXh6vCXaOFtCUWtgltO/ctNr7RkPYSJdK4blcjmmXliFlrZohD2zahrjRA09M22RG41iNZRgp7udCMlaAR5rXfTJnFTV02eOqakZra6+INYBvcC+m4VcGIIaFLUEjym82ImYTlsmURzcVraUKH34fnVxDrOaLeqxsklI2AJP8b0MrwlGgz2gcoensUhdIQ30OxusHhsG1kf7AXOS5HwPIo1qwJLj2WLwI/p/TKkW9KCKn9o8BXLmKO5Sq++2xECc9bnMTV2bQBVZ7kEpa3d3t5aaA69Ao5CaOlnC88REungyI4boIK/oY8mXVPtinleo31Xeocio9CWo/qs1C7+uim2j/lqGJQHJ9+OlJ49R+Psc6k3+3GI/IGna/0VFoniUMUcsws94vuRvhrb75lVrEwYtuGefL9tvzjsA1lbqV023HTdfPGdOc7gobOfoyKy+fv3TXsvaDh4XO28WdxeP8/uv+zAWw/ufHPV9TSz5bfMJ3jf3n/TVLEcfjlD9rtUSl9CAAA`
    },
    {
      title: "Get Angle Between Vectors",
      description: "Gets the angle between two vectors in degrees.",
      tags: ["Vector", "Math"],
      template_data: `H4sIAAAAAAAA/81W207bQBD9FWtfaCUXkVQg4bcCokWqUKVWvJDIWu9O7BX2jrU7JkVR/r2zdi7OBQq0SDzFOzuXc86Mx5mJrER150VyOxNGi6Q7i3jxm4hJYxUfpcvZiX0IqoU3P7WWENUeYqElyaUXW2cXl+n12a/k8+nxcaywqtGCJZ/MRqIyFpSTE0okkTNZQ5BWqM3EgPMjzrE6JLfj2Bc4TY1NCbEkUydH2Tzu51CNJ6xSKyvg2APOD7/JyVEAOhIKS3T8PBIO9EhwJPF1a/gKFH2xeQnRGdAUwEY3oAgDhPmYHQ3J0ih2ncjSQz+SHQ42MBRGQyq1NmTQynKJNXDZBMtgAsrbADPDUveyr5FOC9awxbqfSe7kww4VH1EBkWz5ZAs+NMXovuMUGRtpyB2AP3yMH2aTxitJ0IfluUN3QIXDJi/2i8GnxmpwJdNchc4PxhvMawzapAothTkI0nSmpO/F1dDmqZ+aCVnwoRVznp7GUjKIjd7wZYFr0Kl0DqfsFzyFL5FEcjSPt2a0timUvSEN08JmbKhuiO30UIfzvXR8qMvGyXJJVWDddXVl0OCVM62VY26kMzJj1QkjD9SDcfpcGNyjQQ8EqJeDaLscDXrVB89WgQsO/0v5Yb/8YKd8YSz1F4VerJg2yTpyeLwTmfErJfNeLC4rXwY4ATxfJ+LKR9+M1mDD1lILF/3API3a3mu9gifz8XyZWzRkysMcqF0Ni83A/LxoUe1bk9z1tJucv2zKzml/873CVv7wEm2McoC24vITqNP6O9icijfENHxvmDTSU5C2R+YVWu9O7CvEGW6Kc4H0w6FuFL0TXWxT7eb4NHhShr0xg8dJn5eyqq+bKgP3VqxXm/vfBuJJ8XaFeHwPXdl7/r8CkULPSaIP0qnu8eNqOZ13V+33ol2Ea73amz3avHIpXnQf+vVatJ1WLyp4stXTLoSNfwCBtaFjOAoAAA==`
    },
    {
      title: "zfill",
      description: "Pads a string with zeros until it reaches the specified length.",
      tags: ["Styling", "Math"],
      template_data: `H4sIAAAAAAAA/81WbU/jOBD+K1Gk1S5SivLSFpoTJ3FXWFpREGwPtgVUuY6bmDp21nGAUvW/3zihJS3tAqvd1X6KPZ4ZP/PMizM1h0zgcWr6V1OTBqZf7E3r6eubo4xj2CIZghLoKBI/acMql2irfGOZAVJorgXSafNwcPJP1/catZqFRZwITrhK/em1GVNOsEQj5eMsVSIexCIgbKAdXJu+ba3R4CgmcPYRrMmDklrvCtZYMCFhfW2ibxkIwVTBeS7pEymMQ8rYtTm7gQOqEKMYjkaIpaSsCQofly4NJiQYzH1PZTj0HbvmOPVd20ojcT+gfKCEYIomvj2cLZkSjiPEVaxj1caM3BEGUc9etYxoQAYoCKiigiM219NOlhUBlubiSpMxFCwohfTMx30EecgJWc9XKNFkma/9IEiNRyAtNZAyVESMIQkp55SHhhjlglRJ2G3iUwxHWYqRImVE2mRMVCRFFkbryYddxgMiGUS4MIWM/OT4Mq4oM6gyJEE4ImkRUUIwHVESGIzwUEXbvym4m6WMJlKMKNNJndLAv2r9VXGcquPuNmy3alWcmuc0ao5Xta2Ka9e9XW/HqTtWxXM8z667zs6NpdsDrmseVo4O9ptwK3hMiFSUpMDL06lGlUkCZWndIZZpEZm07f7XyA6+thmetOqw736x2WnrNtlp8YvJ8N9WvRXD+dF+/XjSKOnWFLqssZ7Xjvr8LBvGF/axd87I0bmD4//uTuIz97TZsTtue9z53Hro3LJxvzt+7Lmdar95QnvxwWPvduz1uu24d3ng9S7PWecxGp9+PnD73TY9bfbsnntWPbmNbvvxIW1xpzE629vT2ZnNYJxAMn3HArKWaGRoQuQgIgiYnpmgaKZMKBgpM2tlZiV8QFhpaGmKQCwylWQK5GqS6P0dkrBJWCYRm6fXFEnRoQtBQFIsaS4FmwskKRoyYihhpESVYDTeCoPyJRTqQb0bxZe8VTUGPY9CUoLhvJmOexqo6BkHz+J34zjO26p8u/Pi9iEMOxSWrhdz60PtUgOAY99spcYRDQLC9ZuEn1SCCYClePXVer7QrUPNzH2bGQyB7UfoNmbmONY9e5C1QZH5V16+Qmld8rZZjjLFImdOd/9363Gzp81enDyuBRFFxud8b4qNjv6I0OaV9bbQ/t4rBSQRhpmrXVJJsNJdm+SI5lUqZPyrcruYD78zsXubo8GCKynYmmiWPJwTGPz8uxxiJopO+/UkJvonh4fvYbGYgCt+7CXKVk2KYbVi8iFGKvr0AWB9yitwq5KvF3W9tVUeHLMVEhOCVNFlf3h9vcrwS7p+pE7dd0zyE3gME4RJupjmXfgdMS70j4jRITIs8K5MszXEvhjsqyYg/B/QddkC2gwAAA==`
    },
    {
      title: "Number to Binary",
      description: "Converts a number to its binary representation.",
      tags: ["Math"],
      template_data: `H4sIAAAAAAAA/81XbW/iOBD+K1Gk037J7ia8teS0J3XLsg0qVLCUFtoKOYkhLo6ddRyWFPHfdxwKDZR2S+96qvqh9njGfuaZ8eMw113KvUms21dznfi6vZzrxv1/Wx8lzIMpEmNwAh+Jw3tvGGUWFZVNDN1HEq28wDqv1Yetr127WC2XDY+HEWeYydieX+shYdgTaCRtL4klD4ch9zEdqg2udds0dngwFGJY+wDReCaF8ruCsccpFzC+1tHPBIwQKmE9s7SS0MVCk1z7ShgS6bW+uIF1IhElHniMEI1xPgAcPmyc7afYH66OmIuxa1tm2bIqh6YRB/zXkLCh5JxKEtmmu9gIxcwLEJOhSlkFUzzFFJJf/DEyID4eIt8nknCG6MpPbbLpCLAUJVeKE5dTP5fSAy2/AihHxstu2sYCpZu0ddEExxrSfOyREFGNLWlEzNcElolgsSYD/BSZ3B0lsYckzsOJpSATLAPBk3Gwm3mYJczHgkJ661Aox3+cHP6ZkCmiUBXNzZpCU9jY+NP/lM/NRgUjwUeEqiLOiW9fOX+XzYPDUqVcPjQ+WlapCo1mVoowLpnWQbUEf4Zlwrh8WCgWbwx1J+CwWv3jybejGpwJ+0VYSIJjIOJ+VWFKBIYmNCDxRJlw2jAHl4HpXzaolzoVmHd/mPTMuY0OHNZL3WOn4oSwfnJUOU2rOd+yRBdl2i82ggFrJ27YM0+LHYpPOpYXnk+bYfuu+f3b3eD7gLYK5+nZRd/sh/VJ665Zanabs/7F4LZZ6EwGYbtwduHMWrV2eVDrhYPueaF/61j9O+XvmGe1yazZbd22uu3S4LhRHV2aX1R9FgvQkYRJ2zKArg0iKUqxGAYYAdcLHRz1mHIJWrIwtsQqYkNMc2qlaAIzT2SUSLDLNFLzKRIwiWgiEF0VWOfR8k6uDT6OPUEyK8T0kCDIpVhJToxlDkb1pTAI20ABd29vFA+y53E2hXbI4bAe8+GCwqBxDglfbVRXuysssGzrTqydEN/HTL0H3r2LnwJu4m2/GA8HFipQttXeeiIJ/QQ5dflSkfUMza6Hh4yGywr84elZOj1BYuzxjEV1B5/tiSXNW7uYed6yLNZpf8kBF8gDKVDhRGBPqlaKMpJWJeQifDpPaJN/kei6aV+cqZzJV2e6BR26SwpOd0Df2KGTvRnPEuZRvmy098DYBvhjgUH6T0ksnwYkcARO77VVLwJ4YNQBiXu0sv2zR/veZ/dG5RA4REQ9k/tQ8BoirZcRWchL1x5S2cnlsZTLtUVrwrdtXjP/2sHeI8HMeb8b7djJmPUsya8temGTBIfF8I6pa9hTnzBvRcnel/EddmKdci7gQz1OqFw3Y41MSQzrj3rx8169+HkfFX9b4di/e1+1zZaYNjhhP7LfC+pr9DelDEX0Pw8AAA==`
    },
    {
      title: "Binary to Number",
      description: "Converts a binary string to a decimal number.",
      tags: ["Math"],
      template_data: `H4sIAAAAAAAA/9VWbW/iOBD+K7lIFe1dtkp4a8mpH3aX7Zaq0KOlL9BWyHEMcXHsrOOwpIj/fuMAXaDQPVbtSic+YI9nxvM8M57J2PSYwIPYdO/GJvVNd7o3rdm/a/YSjmGLZB+UQEeRcKYNq0yirbKNZfpIobkWSMfV427jU8stVEolC4swEpxwFbvjezOknGCJesrFSaxE2A2FT1hXO7g3Xdtao8FRSOAsB9ZkpKTWu4M1FkxIWN+b6FsCQjBVcJ5JPlGOZGooYTSS0COgNnmAc6oQoxg0eojFZNEAFHJLd/sp8bvzK8ay77mOXXKc8qFtxYH43qW8q4Rgikau7U2WTAnHAeIq1JC1MSNDwgD85KeWAfVJF/k+VVRwxOZ62smyIoSlKbnTnHiC+QuQftDyPYB0ZLysp60vUbpMWwsNSGwgw5vSFytJed9A3DckUYnksaECsolL4fWSGCNFFqPRLgZEBVIk/WA98bBLuE8kA3TPppCNN8ZGviV0iBgkxfAJpiFiBs9qY/83AXpYymAkRY8yncQx9d272t8l++CwWC6VDq0PjlOsQKHZ5QKsi7ZzUCnCz3JsWJcO84XCg6XfBFxWPf5w8uVjFe4EfxGRipIYmJid6pgSSaAILUCeaBFJT+3ObWD7t6cMp7Uy7FuXNjuvPUYHNX6dep9r5VoI5ycfy2dpZUG3pNBNibULp0GHNxMvvLbPCheMnFw4OLwa1sPmU/3rl6fO1w5r5K/S85u23Q6PB42nerHeqo/aN53Hev5i0Amb+fOb2qhRbZY61euw07rKtx9rTvtJ69fs8+pgVG81HhutZrHz+bTSu7WPdH4mE+gjCVeuYwFdS0QylBLZDQgCricmKJoxEwp6ycRaaVYR7xK20K00TSAWiYoSBXKVRno/RBI2EUskYvMEmyKavslngU9iLGkmBZtrJCnyGNEtJyZqIYzKfw2D8qUo1EhtHcWs7WFoqToQLPgQagLccKG0zzpKDcGZ1uAKUW7k7Fz2vHNObiFk5yV1HjQj1F8IWszvPNaB6LDh2DVrsXFCfZ9wPTrwTMVPASLFq8Plx4X5MmR47ttMFGX70xbUEtC/zSyadTMKmO5Os/WTMTVV2kB4jEXGuH6vr9bPr3hxXniZJnbFyyIZGRfP5F1GjKrLrBO/KxH7LEvaO5OxBO2MxuqM8L4KNiOTJCJI/SqwtwH0OjUroOqJHtmMLECSCMPI0M6pJFjplhNlHmdPfYbxnbLr0a2KfG157lAYaKPdjA1rB67ZpXt7mzn4B8mYTL+8NqOivd8HCib9Sx/2q890rYmz+Z3+cbRFxrmQ79bWnsfZW7KzBPVoc+h6sEjB1oS+5OEi+5x8lTDMxHSu/G8Y2wmRCnaz1zH1uPdnfu/VGtu+tFeK7q9tKJy3mYfJv2GAi3H+DQAA`
    },
    {
      title: "Count Value",
      description: "Counts the occurrences of a value in a list.",
      tags: ["List", "Math"],
      template_data: `H4sIAAAAAAAA/8VUTW/bMAz9K4YuOcwomg0ZUAM7dN2yDRh2KnqpC0ORlVioLBkS1S4I/N9HKXai1HHTdgN2sknx45F85IYspGb3lmS3GyJKkm1lknbfjCydYihSs0IjtAFed9b4FzTeKwgpKSnQ3gq1my/z4tfn6+zDxWyWMl03WnEFNtvkpBaKM0OXkDFnQdeFojXPSTbBN/4bDM19kpwwLbXB/5wYXuYkzQngc1BcaacguaHSoWN7h08CqBQMH5dUWh7bosEkjbNiVJ/u1udbaFlGTvuUjxUWEpIeh7QydH2I6RsHm0DFE1oHdHqZ0OTBQ0yEwl8pLJyNodWLpbOMAo/RWDDinkNltFtVx0tDyamSG4nV7VzbyV2LPUcQ2TQVZRYXD86A5IVlzpfXkrZNiZUaSHbepk8m26iCy2i0fk6o1g4aB6iHdePlB2pQaKQzVPYgiW5AaBUpSm6ZEUGLPjfUCLqQPAGdWA4RjIuXwvD93IPopNeh+IlOHkHo1W5WEZjpi5si1EFPqFq/oSc+fw8nRjEdoKiEgnjpym5dQ6i95/vZwHMhC6CryFf3+ecelC8BnzPywybfRVly5S8A60zKNZYr2NMbESX82CL3utjEgZBnoRqsjQQox+4MEqDYkujEqdkajdHRMt1RQfFnea1cPQxzHjc8FLGr+tM4dMMbTuGNyJFwr4F9NEbH+5EgQ+KMj//auP30L6XUj0nYj6uKqhW3MQ3m2nylrBr2YUCEgcu+k4YyPG4eiTCcgZ9kE9jWrVAfcqz1YvkXpPkXre9XfrT3oyQ6VbrSpv5/63IA+93zuJnU25txFPhJ+37Gd+0fngqxxo4IAAA=`
    },
    {
      title: "Compare Strings",
      description: "Compares two strings and returns the Levenshtein distance between them.",
      tags: ["String", "Math"],
      template_data: `H4sIAAAAAAAA/+1YXW/bNhT9KyqBojEiFJWLDKiwPXTpgg3IiqIt+lIHAk1dW2wpUqAu4wSB//tISUlk2VZsS8rSok8WKfJ+nHt4xOsbMhWKfc9J+PWG8JiE5Zj41W9IZkYyO6R6bhfZNQhptdo+FTNuVzHwSUyR3q6yszfvzqL3f34OX785OfGZSjMlQWIe3kxIyiUwTWcYMpOjSiNJU5iQ8IV9B1eo6cQ5mRCmhNL2eUI0xBPiTwja18XEqTVINXifUHM5zydkeWFfc6SCM7tgRkUO9fV2wQu/7tladi6/Op9TJeLapnu3i8QmUzjeHNZc0+uNceUeLpSXl8F5VMbeHNBOJuCdwyXIPEHgclvUajozOaMI9aicse+AiVZmnmxO0Y6MjEELm+XdVpt3zznGPEcqGXhTwAWAdGmlLx8pmYulJZORGAY+j8MVLhXQU3RxL8ly6ZNcKCThq6XfIGwmIxA1xjr62WllMDNo5/E6c+NLqu0gE0ZTcRsiURlyJWsTMeRM82LW7vlCNadTAR7a8gPWwnizaxgWm+A+CLzCvYMoD4UX1LwHO6Ng3Y97cT+uuw/W3CdcYl014kpvCiP3O8cnazunIkI6r+1Vt57PXDguePs6JP/k3t88jkE6CWPVkvja5slZU+RqDn9bWo5VtolBLl6WzIJKa0gR0Ca5tAWPStI8oJjlogbwAqSre85UgbzjfSuLNxqpyLPFSFCkdodFmdA5yDkmA2Y17iOrFiMHZcVn/3ep2pFpJPV7LRNNmdVOZ5BrYOiUKytIXp1ZqXS6PXFGhYh2+7BvDPtOJYctaQ9sHx98kJmSqJXYgNBKUT4CGi1bK8OEKhVpl9J05eReB02adN3Iq+0M/KM3BnYTlJ74136EW3J/GlTRkAHFAyHk9l511TNXepC88Sro3kcq5+DtQbsKlIGIl2m45MrkkVaLzvR7oAQN/r3NbJ7xFyoM7EOhYfEAaYa/rzSNlPfRhpHtHPqUCY6l3A8Iw/AXnMeAoZOksO5UaOfTOgbb24DP2tx3AW+FUAvv3Pas3mniFCWvtwNnSv9FWbIOw1pDsLblqegSb0N+JfLjlu9YtxiY0Rok9iONO8viqbawgivtUHl9e6wbVa9nsbsetYvar7N4EF92Poud+oAelLiNQA0OP3sqbQELIqkw2o/7G09scGgPtNcFHtw/VT8bdAe3j3tB1y3blMvOeT5PKSZHz4tL/FG9L/CrN9bz0beRd+wFo9FxMGrVzoc91L6ufmW6YXXcOe5bs8XDHSNGdSevVyv6L5fvTToF/SNcKlqr/iN0W712nzsh2+UAD4tFT38B7QZpA4YPKnP3l4odF8v/AAxKMR9FHQAA`
    },
    {
      title: "Trim Dictionary",
      description: "Trims a dictionary, starting and ending at the given indices.",
      tags: ["Dictionary"],
      template_data: `H4sIAAAAAAAA/8VUTW/bMAz9K4YuOcwomg0ZUAM7dN2yDRh2KnqpC0ORlVioLBkS1S4I/N9HKXai1HHTdgN2sknx45F85IYspGb3lmS3GyJKkm1lknbfjCydYihSs0IjtAFed9b4FzTeKwgpKSnQ3gq1my/z4tfn6+zDxWyWMl03WnEFNtvkpBaKM0OXkDFnQdeFojXPSTbBN/4bDM19kpwwLbXB/5wYXuYkzQngc1BcaacguaHSoWN7h08CqBQMH5dUWh7bosEkjbNiVJ/u1udbaFlGTvuUjxUWEpIeh7QydH2I6RsHm0DFE1oHdHqZ0OTBQ0yEwl8pLJyNodWLpbOMAo/RWDDinkNltFtVx0tDyamSG4nV7VzbyV2LPUcQ2TQVZRYXD86A5IVlzpfXkrZNiZUaSHbepk8m26iCy2i0fk6o1g4aB6iHdePlB2pQaKQzVPYgiW5AaBUpSm6ZEUGLPjfUCLqQPAGdWA4RjIuXwvD93IPopNeh+IlOHkHo1W5WEZjpi5si1EFPqFq/oSc+fw8nRjEdoKiEgnjpym5dQ6i95/vZwHMhC6CryFf3+ecelC8BnzPywybfRVly5S8A60zKNZYr2NMbESX82CL3utjEgZBnoRqsjQQox+4MEqDYkujEqdkajdHRMt1RQfFnea1cPQxzHjc8FLGr+tM4dMMbTuGNyJFwr4F9NEbH+5EgQ+KMj//auP30L6XUj0nYj6uKqhW3MQ3m2nylrBr2YUCEgcu+k4YyPG4eiTCcgZ9kE9jWrVAfcqz1YvkXpPkXre9XfrT3oyQ6VbrSpv5/63IA+93zuJnU25txFPhJ+37Gd+0fngqxxo4IAAA=`
    },
    {
      title: "Translate String",
      description: "Translates a string using 2 character mappings.",
      tags: ["String"],
      template_data: `H4sIAAAAAAAA/9VXbVPiOhT+K51+8cPWnRYuIr3jB3eRK47gqF13QZ1OSAMNpkk3SUVk+O/3pIAWEV/X3Xu/QJOcc/LkOS85mdg9JvCVsv3ziU0j25+NbWf+79v9jGMYIjkAIZDRJJlLw1c+Y7TygWNHSKOFFMxO6o2w/SXwy7VKxcEiSQUnXCt/cmEnlBMsUV/7OFNaJGEiIsJCY+DC9l3nEQmOEgJrG6BNbrQ0cufwjQUTEr4vbPQzg0lQ1bCezwQSccWQJtaplpQPLuzpJaxTjRjFINFHTJGiAghsLO0djUkULraYyEHP99yK521tu46KxSikPNRCME1T3+1Nl1QJxzHiOjFHNsqMXBMGh58+qxnTiIQoiqimgiO2kDNGlgUBlqHk3HDSEywqHOmellEM7sh5eZy2gUTjNbQpC1kqZ87KlPktWXAmqYhWn9dxKXr9TGFQLqIxRq6IjqXIBvHjxMMo4xGRDE53pzrduFw6cCpFnzJz5gmN/PPm35ulkltxa+52zfHKNbdU9rZr285myXW9ahXWqk7Nq1RrbvUv79IxEQR71Rub+3u7ddgSzKVEakoUcDJfNZAyScBlzjVimZki4wO3+yN2ox8HDI+bWzAOTl121Bym1SY/G/e+NreaCazv724djmsF2YpG3yusUz6Iu/w46yVn7mH5hJH9Ew8n3667ybfbVp1ddYftYavUGnWGDdoN9katUjs+quPyUXB120kaSat+MGzfNm/bQafS+X580wmipDP8krSTTrkV7N12g3jYHXbjzvDKa3Kv1j/e2THumU4h6zKufc8BtpZ4ZGhMZBgTBFRPbRC0FRMaMm/qPEjtlIeEFXLb0ATTItNppmFej1MzvkYSBinLJGIL/9oinUXw3UREFJY0nwWdMyQp6jFiaWFBTBVg1F4Kg/IlFPpGvxrFrDQYDHoR9wUk3osZ0SLMDbwPzVeTX2vBeC8G834kiyoAI1XEUFrBEFOui9U/mt8buaF7zVJlRbMHxQ0NCrpisXvDQDIHgGXfbiprn0YR4eYqwnORaAyHpfjhZVXYcAtyYGHbzjRlnwusOmtuPIjEcBbNz1x6M6H1UaCwyMk3Fe3JFHujodVgmLn5gaEiITkfdwSepozqWfh/GB2/hov/AhGSpATpN/Jgrs0/EhLrMyyQ2X2C7TImRtYhVdqCCsQHRBUzrSHkHsLxKhkrubaick+nRBhaAIOESoK1uUPSPKHnNWph8mMCkT7F/hLyTzsfhSFFUv+RIHgtIw/S4x+iTWScmXboo7gB7//+MvE/4GXR4LyPmWesvJCZp+N3tS94vaPLr6hfULIsgXEmJby08no1K2UnBLpbTMy7ywpMaSl4bL42L/WrPnpjs1KnyvSxBQiDjCFp7d2k8JJQeQf1NhQPquqy5lO1FTMx659+R3G9ewx8cJQucbFjXjj/AqS0kfzBEAAA`
    },
    {
      title: "Progress Bar",
      description: "Generates a progress bar.",
      tags: ["Styling", "Math"],
      template_data: `H4sIAAAAAAAA/91Y/47TOBB+lcgrBL0rpS0URMSdtOzewknsHgLEPxRVbjJNLZw4sp2l1dLX4UF4MsZOf7hpuqQNZZdr/2g8Hs98/vx5YveKDLkIPinif7giLCR+3ibN+a9PRlkSYJPKCJ3QR0M898YnazGjbKNJQqrpwgutV6dng4vn7/yHT3u9ZiDiVCSQaOVf9UnMEggkHWk/yJQW8SChMfSJfxf7YKIl7ZskfRIILiQ+98nRk1H4qIv2Zp9odLHG11JEEpTynlP0mn3EPqYpZwH2jihX4Dqjw92mmxpDm5wfTNKh4KEzaJX38xhnY7OW44okna6DegEJSKpBedRLFwCHVLa2IRTDUaYCHOEiUFqyT6DHUmTRuHw62MqSECTHGS2H4hx/znyW3fjYiloeGguOAEnR89vX1XdzQJGplaclxl2psvahifs4Q5VmifY7TRb6ayKlGQ+lwOnOyGzWJIoLTfz2rFnYB2kyAO5sBKNqNItMp5lGu56mpn1JJTZSnknKFwCJSDUTiWMIQQWSWSuOeU8lo0MOnhaeAu3AeFoVhhHjCkSSxTuDOMmkxC28lLWDolOZjZhOBvWhnNMJi7O4FEqnKhQOSaTH9YAcx0Yznhh5wZhKGmiQa2C6VcGY4Z0VFj0xiglhhNrTg0vKM1hGmPetj/9is24Fr2W2uZ4LxN6IcQ6hi/vhLri7N4Ub4lRPXdiPKsM2hakO30e93tlZr7cHepO5hPHeTtDrUH50bD/7Qt8g/fEG8iEfaBo5mcUixJnJY7Bjt0/+Vd5LFoaQmENGMHcJp4iTBcVjyCph9/EMi/U8Nsk04y1TB/AUQCySspMMFs1BXniLhxkTapn7r30iFCafO5VXXxUIu2bm3XPtuySvRYUgbZf1jSGleZ1yuyV3d7bGwAmncXqRxUPYi81KmFCntbnotA/ERnUtn+ZbbqnmU3bJFHZ55yIEV9EPSqjbkLPjfUs0uEeQqutwrQIKipwcio+8Br9anALq6fFOTPX43h1MdC8/VzQeoET/sAbDWaOxRtOvqTq2VO8+wdJY/AdhKi59NdILErj/W0ig3Wq3O9tX+f7BlnnfWWwvbRdA8Vi9Km1v8JQbbtQ1z5rzl4W3U41bH3m71L/P2v5527bw/3xp58fnujVtcem6gZL2BlKg+q2WLIkOqp2fQlK3NkmVdHwDHC3/nalMUumd6pl90ee3ysbftpHLouH0dOc9lovGtRxWvUG9plKB9woiGky9/H52gltZuXvZ+pyzhJ2DUjSCfyapvH5Lb95Ft+N5q6ccvP8SPl2COuZcfIbQe0ejmkAKtaU0ALp8B/qveqDKFgAA`
    },
    {
      title: "Format Number",
      description: "Formats a number to use suffixes like k, m, etc.",
      tags: ["Styling", "Math"],
      template_data: `H4sIAAAAAAAA/81XbU/jOBD+K1EkxKILbNI2hWZvT+K2dCmirWC7vKPKSZzGxbFzjgMtVf/7jdOXTWkLhRV3fEDE45nxM8+82B3qLuXeXaI710Od+LozXuvG5L+jBynzYIlEF5RAR+Joog1fmURZZQtD95FEUy2QDqu1TvPvtlOs2Lbh8SjmDDOZOMMbPSIMewIF0vHSRPKoE3Ef045ycKM7prFEg6EIw94mWOO+FErvGr49TrmA7xsd/ZOCEEwl7GeSGhcRklozjVwMOqNb2CQSUeLBdoBogvPaoLA5d7A/wH5n6n8ouq5jmbZllfdMIwn5Q4ewjuScShI7pjuaM8XMCxGTkYpXGVN8jylEPnrRMiQ+7iDfJ5JwhuhUTzmZVwRYio9rRYjLqZ8L6RcnDyHkIiNlOWddgQbLOEs0pLGMNk1yLU2wlqRBQPo42VnFI3eDNPGQxHkkiRTkDstQ8LQbLicdVinzsaAQ2cx0tHk7F2wseECoindIfOe6/mW7YFn2rl0p7VnGtlW0Srvlslkow3epUiiV9my7Ymzv2eWSWSrvVm4NVT1wXLW2fXiwX4VTwWOMhSQ4AUomuwpVKjBkzLhHNFUiPDgyry5C0784ot6gXoZ1+4dJW/VevFtnZwP3W71cj2D/cL98PKjkdG2Jzm16WTwKr9hJ6kZn5nHxlOLDU8uLft4323eFZu+g0DpvFK+qfu+yUH9sfq/1Gud1+7JN71rtut3sdR9a1ZPSVc97bLUb/aveyeNldDCAv2Lr+89+o90oXPa8Uqt6UGy0m73m4KgSXJhfVYZGI+i4lEnHMoCwOSopGmDRCTECtkc6KOoJ5RK6bmQ8aeuYdTDN9bWiCcQ8lXEqQS4HsVrfIwGLmKYC0WmKdR6PC3gm8HHiCZJJweYMCYJcilV5JVjmYFTWhUHYHAoo11ejaM5KPMjKPgfDWqTDhW5E3RwQPvVTU84VFNh29HqiHRLfx0wNTm+i4g8ANvGejtZfBxbKkLWpbz2VhO6MQQFIPcOybD4Dd50x/y+M6LHSEwqnTQ07icczGlUbPlsUsi8XHeWJW8/iLh/6eiZRzqS4nombMyll/M4S8k1gGFbHJJHvze4OzUphbYbfmCprPj4V2TFmXRm+V3zZjPztwKZtvF5UX98rmAh1GZGp/6qAxjPniSfrTegFjqEe/6tMLAdumuZq7OchXMDqjNTdn8r+ygckkAdXvXJLBPakuijirPAnA3oS4UoGSPAh0rcBIzf8tAGnfMo38Na2tbWanD8VbAmPHTeVykmz1X4FMwzm/GpePM6k4HQJMXMQTjG8Xdizp3qUj6+pdY79CLPhBS+LV806db1426y+2Ks4QCmVs6u9Su5JAltag2elNmP/8xLmFu72nPb/OcXmoPzxfAs/KZmXevj30M8elh+haswd641FU6Oci1nJnMIz3F+oFy0TT96fr6qdecuPnYmX3Kz5Vtwg8AOxPxvHRjacZ6W+tfXGPDXhp0eMvOxNNc5VG34AameqfLQGFl3Cuvmc/YD5nknWT9bEBIT/Al29HUhrEQAA`
    },
    {
      title: "Get Head Pixels",
      description: "Gets the color data of all 64 pixels in a player's face texture.",
      tags: ["Styling", "Web Request"],
      template_data: `H4sIAAAAAAAA/9VY204bSRD9lVZLESBZODYh2oyUhwQWgrQbISDZhwyy2jPlcYue7kl3DcFC/rK87Zdt9YyNx2PwnZB9svtadU6dqmr7nneViW4cD77dcxnzoBzzxugz4L1cRzQUNqFNtAchHe2mb8WMP1UMGjwWKMa7aPb++KTz+eNVcPDu8LARmTQzGjS64D7kqdQQWdHDIModmrSjRQohD3ZoDe7QitAbCXlklLH0PaS77U0nsQA65I2QI+0q5k8B2ScQMTuXd6BcyIfXtCxRKBnRhp5QDqr7acNOo+oAGfCWv3nTXaPiyqGJ9R99wlQYfty7xIrBjF+OYR9YsYl5apjpMaEUe/uGSR3LWxnnQrFsrt+m28tdJBCqfjm08gawb02e9B8HSaNcx2AV4Xw4Ssi3jNIjYpkSA7BhuONYT0TA/GpuYf9/gUl8z8X0csj//cloagH0MywQWyBlp0B+xQwNi0REMfdxt+ByhWMSqvr7FaRcDynjco1BqyHjoKr3MlqdPuUM+cKHwwZ3yiAPXg8btbTOdAdUJa99ktK0yTHLkeZxkPnxrbA0yFRuhRr7yE2G0ujKRAwusrKYpTNfhZWiq8Bz5gArbrxb1g2PYOIE3uHKTpwXVHgXEvCntUF/1bk1lJtSJ6TtL1/Ojlkib8GxlAoFyyje0o2j6yp+t2b560uN1bIYjwpqYX5ysn04c7KrOiiSylkz9vnEA/GwaTngZ459knEM2tfoaLQlHhBDMqpX8YrBt0PSx+hunqNU+0SAr6JlEeWFP4+1AwpVpwx3vSP4Cx88eP8yN9RILDfVVEOBy2jWRaaQjU+buTlQ6qouPcTMBc0mZZVBYfc1YLMPKm2+Ipu7Xph7zT/23W1S1ccKQb4c6IiSXpvcPYT6yMTATpT5UQ31P9C9IEBGF5qoM1SJ+JsVrJ8WyVBavYDvOThkf1MVMvFapldRty9sTapQUldwa6RnA7vyeb6O/VLsj577TTS2xiWzanpUqF0TD6pcTFNBgT6WEX4VKn82LlymJP4eZDgcKHgf8p5UKrBJd/dpZi6915fUfXXyNDEWMhC4Ji9AD4WNaVlA7iol58rmk7byQVGdYX9JSvyjvtAJuGrmnRj7Z+l9jYmnk258ZMKlFdFNUWdiSS0V/bMiK9rYqJ+Pr3yKfNnbQJRIJW0V8nWezl7yeorpJ7vXIqDa2PS5km8rOFvL4aw5HlHZtkYt6vOXNzKbS1akTPneeX62fEq2N87J+Ym9ZKna27A0bUZE8bPHbfxKekW/cuFut6C10dpbnYXGi7JAydDaFgclo3USphCdC+vgc552wT4jopX0vQSi9osjOtgyooP5Ql3DjfYvp4UeNxvXsfnyX56YOYprb4Pdg2l2L04/HvlAPmttVHK1vrp6kGqp9CGjN0Ncf6gv7JaLHlGbUfHwP9BmPCzB6Oyz43r4HxETfxK8FgAA`
    },
    {
      title: "Reverse String",
      description: "Reverses the characters in a string.",
      tags: ["String"],
      template_data: `H4sIAAAAAAAA/8VU33ObOBD+Vxhe8oI7YAccuOlDek4u9oRk4jg/7CTDCCEbOULihEhKPfzvXWE7xanb3t1M555gd79dffutViszZgI/F2bwsDJpYgZr27Q238CclxyDieQCQIBRJNug4a/x6KzGsMwEKbRFgXc1OI0uPk2Cnu+6FhZZLjjhqghWj2ZGOcESzVWAy0KJLMpEQlikCzyagW3tQXCUEYgdQDb5rKTGPcA/FkxI+H800d8lOCFVQbzxjMkLkQUxrpWkfPFo1k8QpQoxiiE+R6wgbTgADnZOTiqSRNsDVnIRB47tOo53ZFtFKl4jyiMlBFM0D+y43kklHKeIq0w3rJMZUGHQev3LzJQmJEJJQhUVHLEtThfZBQItLciDViQWLGm19E2U1xSG0aiyX7SFRNVe0QpDpcSAJiTCChwG5QYyikbJDz+SUsTzssBIkTYZnfNMVCpFuUj36w5WyRMiGTT3llofPO30m0sxp0y3vKJJ8DD8o9P3D7u9bt/1rY7nOkdev+d7Vsfpu4ceXDmnb3W6tn3o+/aR92Tp+wOHDU47ZyfHAzgT6uVEKkoK0GQT1ZxKSWBk1gtipXaRamTP7lM7uR8xXA09sCfXNrscLvP+kN9W8Z9Db5hB/OzYO6/8FtZV6M5l094onfGrMs5u7fPemJGzsYOzm5fwC7bD7vR1OgkPLwYsnWVXTvjXeBl+CavZ5HY5vbuqLgfjNFzeOBeTk254d2JPs6kbTobVdJIuL5ahczm5ep0u2XO4PGWzQeiG1cif39sf9XzqGnau5CpwLJBrR0iGKiKjlCDQujYBaBZMKNi72nq32DmPCGtttpYJ3KJUeanAr6pc2y9IgpGzUiK2HbAp8vUNfnMkpMCSNl7IuUWSopgRQwmjIKpFw/+nNCjfYaE+q3/NYv00aA5yfe9bPJzv9YhhH9GixURsC53q6poLhANzWBhnNEkI128n3kCSCnhT/P51/XZg14OxbWubpaLsw4bVmqbZ8Nn3TIOA0XoIv3ip16Af6Fhg0Qip1/Cn1+K/VHG+q7Ke17sqbTkaNd7ku84ZVf+zEDuENi/lOS3U7yL0tmi/eTQ7fY0E5Vudn+qv2A9gWyQIAAA`
    },
    {
      title: "Fetch Palette",
      description: "Fetches a color palette from a Lospec Link and registers it.",
      tags: ["Colors", "Web Request"],
      template_data: `H4sIAAAAAAAA/91XbW8TORD+KyujCiqWhHK0EivxAdrLHYhDiFbwgVSRY092ffXaiz0Lrar8d8bbTeO8tUlLuBOfEnvn9ZlnZnYv2VBbceZZ9uWSKcmyqzNL29+MjWoj6MhdTkIkg1C20vSvuQlazSFlkiOfSNHt5VFv8P71SfbHi/39VNiysgYM+uyyz0plQDg+wkzUHm05MLyEPsse0jM4R8f7wUmfCauto/99ljsA02dpnyEJNFc9QFEkH7gGRFIen9JDhVwrQY9HXHuIpUngYRp7JsvB5Zfgc2i1jJSmbr8XKthOV4fFL5ZEBT7hRiYOcuURHJ2S6uY47XBUe8ER4jg8OnUGWDhb58XypOhUGwlOU17XqpTpT86q9srklMU76ysQCXk76/yiVE7HRJ7aYLaXKpnFFXQgiTwGBpqXFUXDxuOUeW2RZU/H6RxHKzMAHZE0MC5QV9IdXlThP54jHSpdO64nETJbobImupDghVPNLem09EveHEXeX6zrPeB4P/9tQVp2Ja1BYzEYhE7eSQrEymfdrm4kO9SI3Vb6iSZ2dh342jkQ+OTgeZTD3iKEhTIYt7lsB0QTylTz2f6C5lAPkOeRrp3E3wtJBQjoccbe+ORvJSWYMHNEKyIvCC0l5qdS5PBgTCRpbbMale6MQhe2tWFNOMummwccfOPu9gF3JTRXvKZfPN17Yau2mjDDwRDVdRqHDqgn3hHk2wrIwdebopkvyhXd5mzskOVHgUW7nQLOYz5sUNTjCyOo042t/XVpD62EpKft97i0n2H4ETwthoYD8yhEFX6+gfe/AK+9foSvNXhM/qHRY+WdXG/C5jDNupXmykR5G6S1l5yEHr+L/4NZGsV6/w8ebW5jkUtLufivn50rs0BQmY+UwE9c1789EqtROK60wmNariZfDYKDimbPXcdc0dz+UhBWd9iJq6fr4pWmeZKEkZocFtzk4OMO61n3JxfFIg6rm2uiMkXScXHWzBOpwo6kK0rBTHf2xOSWVkzYzM3SvR/8N9dwbxaEVxVlKLfaV2rtrfn45eoY1Gi9EExdLoawU3IsHjXrTu3uHOzeCOpSC09XQ/hyAwYZ68qt8Uffv3Vv5eC9Z9hbq8xtI2zbr2prpfCgoQuBuvufds8aU+EnvnluQGxB3xiwktm3ym93lrYfPTELauP5N5Cb90Tz1bh2O9yJkvN7fuZt53T8A8oX+gS7EQAA`
    },
    {
      title: "Quantize Color",
      description: "Quantizes a color to the nearest color in a palette.",
      tags: ["Color"],
      template_data: `H4sIAAAAAAAA/81YbW/aOhT+K5GvprW6bLq04kpEXKSuLVu1q710VXWlUSHjGLDq2JnttOVW/PcdmwAmJLx0pN2nxMc+9jmPn/PYySPqc0luNQq/PyIWoXDaRrXsGaJBKgg0sRrCIBhjaJyNhjdnsV6uUUMRNng2CqyPZ53ep3dX4XGz0agRGSdSUGF0+NhFMROUKDwwIUm1kXFP4Jh2Ufga+uiDUbhrF+kiIrlU8N5F+EcKxloXGeh3lq8pFob9T4PT6aDJDfQygzkj0D/AXFN/OAx4XfNXBie75He7Zl/yyHNaLHs/gmTcusVhDRUeF4elAxy4cYGRgRnRQFCsqDZlgcr+INUEG+oHoo1it9SMlEyHo+KsoJWKiCoOic1dIdU9pxVjQ0bBQMkY8hqyOyqCBHNqDA0uzt4+U1I3E+BRKkxYr7Eo9DdTG0Zux72EAZsERIMmkxrSXBoU/jWp5eiaiB7lHl8t+cAsUwNGM05s4w4raCQ8VZjPQkQyMUwKzxBRTRRzVvC5xorhPqd2xzU1XgzNbWOAvnkI5sHsHMKX+Z54q9e3hsAxYBEBFmMvAqPSzQGcZjMIaewMLce09pfUBJRBFaiwJei93dZ2S9Go/SmN+1Qd6MOgFWF127PEa78JWu55+f5dcId5SvXC6Y9Op9E4OWl/vlzYrDa0vwGrxLBomg/n/0ElRtRHpL6CyIgJ42tYlKmfy2vhedRY8ezznsFDz1fOwOhYhCyc0B2iCx18YFFEhRVUkg2JxgA9I3nJ9Rb8ewK0z+ZGqWH87Y9MYqZYu3iKtBso2JvSeIN8TwflqOCAB7Mm0nHBQr22qgpnmRGqZJbVbRBpvDpL3cfDwTHH7z01/0LRX7toS6Fgg+dEopwQU5LOGTEXjCtbb15W0HGhM2MuhxVmFDgtcFCYgNTaUJiixFiVSxwBswoXUsVVMWjD3m/JoA3orzKoHH3Qkzn0rnaC0xEWgnKNlhnlOr2+PB7le7DivG4rCJdTeah+L5hI3On2+1XzVi7HnsvxMuJXisVWASplsf5l6LLLkj9RKjS+o9FaAIs3MyoPZ1UezxjZJI/lCC1N9k9VGMvduFlIkWazuYTktpErmlBsXlTiNlFsF427UunixnHCubwPbHU4pRvSJaHrSHWOyWgVi3J5m7lsf8DMpqyoOBca/czK9rueMnuFV51ZYf3VynwF346jg1cMPugeDmY7VqsfvslM7myC9mF5/Z4/TH8eVJXosMJEj3KJHr1kov0KEz3OJXr8kolGe8wTFjhwpXD4p3sfeu8O0HWJXkpZaZJYEPoC+vcE0HNXk2/FV5ON1+RqT5QnQbrmg08qE/THwXX2FTM9FqzV/qzIf/ZZu8Vk/WGwyx+IE02oiPxvztnan1VE1e6L506iuVNVBzzfw917iz2tF16bP9JxZWfrjnfeJ6Cz758rN5Ofv2tBPzAYAAA=`
    },
    {
      title: "Invert Color",
      description: "Inverts the RGB values of a color.",
      tags: ["Color"],
      template_data: `H4sIAAAAAAAA/81WbWvbMBD+K0ajpAW3LA0Z1IRA2y1tYWyjK2XQlKDYSiIqS55e2obg/76T7MRKYjfZh459snVvunvuubMXaMxE/KRQ9LBANEFRcUZh+YzQxPAYjlhOwQhsNElLa3hzEuvlDiFKsMZLK5AuPg9G3y7uos5ZtxvGIs0EJ1yraDFEKeUklniio9goLdIRxykZoqgFOvKqJR7aS4YoFkxIeB8i/NuAMBwiDXonueHPROrgsjDJH0FHNWY0Bu0EM0V8YzBohf694GQvfLA3jgVLPKfq0pcZlOJurU9qKvG8LikV4KCwGrZUcHt1ETxjZog6acpTjCdGxVgTPw+lJX0ieiaFmc7qi4KT4QmRDOpaueatxxzwNlxH7ZAmkV92guXTKJNUpViCEPJBeR4ixYRG0cc83GhsxkeEeZ21bQKxMDozGuR6ntnzM5ZwyJiRmC3zRCLTVHBPkBAVS+qk4HMPCeAxI4EWgSLaS+Ns3zQcxFUWmM+9LLQ0u5O4LCNwoW2Enmt4/4fRAaF6RmTU4+TFgtvvSZL0v5l0TOShOgp6Dkjb//5x0HPPqs2V04fBoNs9P+9/v61klsn9n9BbPq0Lc/3lF3AnIR4g7e3GzCjX/sQl5ay6uirP0+6W55iNNJ56vmIJxsAiZOEEdYRuVHBNk4RwO/5xaZLMAXoaby4I78JPOZCvjI2MpuyEupEokHbZ1O0ZYMCoYNGOVVMYbRDBwQ5iFQvHBAv0m7yujbKkU0OU9lYUbtLtKG0fDQfGCr0ror9Spe9dto1Q0Mm/RKKZDgVFV3xYzeudnTavKlDcqFK4UcMWL2qcKhwkjmHd2VSoJLG2eyZz9CvnmwuZvheDdvR+TwbtQH+bQc3owzZZQe9mJ7icYc4JU2idUU7p6TbxaO7BlvNbrYiZKJbD+/eC8uLj8v9N814uHc+ls474naSp3QDvhdzqu7w3dLUVHKRYzw5Pu93jAwp/F6+HDsuwfXT09wA2xDpdi7Unsg2xOmuxNiCHOSo/PY/5H9xUp3bvCgAA`
    },
    {
      title: "Parse Location",
      description: "Converts a string back to a location.",
      tags: ["Location"],
      template_data: `H4sIAAAAAAAA/7VU32vbMBD+V4xgZANTlqQZVG9bR9nGGIWGvtQlKLKSiMqSkU5ZQvD/vpPjuEribPXDnuL78d19d6cvOzJXhr84Qp92ROaE7m2SNr+ULLzmaDK7xCTMAVE02fhVewKqNlKSM2CHLPTuvt7Nfn2Z0vHNZJJyU5RGCw2O7jJSSC24ZQug3DswxUyzQmSEDjAmNmBZFppkhBtlLH5nZGmF0BlJMwKYULvumXUi+Wk4A2kwVj1jVAJTkmN8wZQTcTomDNK4NZYOPZ9C07lReQR67ft7hdPUfS/xYttjWrdGr4UFl7DEgZV6mYDBb9XwvLpE1MwX3mGOiImECi8CVtb45ap7KrS8zoVVOFgLrQbPFe7ca6DjVOY0npvptVTIglRVSpwyQOjHKj05aalnQkU3DQdCt/FQekA/bMtgr5lFo1TeMnVgR0wZBo0cuXDcytqLmEdmJZsrEfbiBEQ0bt5KQ+ojFrCB3iwe2tvw/cEiHsPzfaykhviJ54046mqvyNHkDDlXM2DLCGsOFO4CrzAFhin57pJvMs+FDnrjTUq+xYklP1Vk1PBThZduahMPUl2VQRcoC1JT6VI1bn22v9w/hL1POlm+ki6swnFT7k0t/vqUOoscLnihyrCeql3DD2f01Dwy5cX/mqp92W+eS/vivMw7iVrcvA87SocfjibqjR/F+FF//DjGj/vjr2P8dX/8JMb3EcY9IlCWxuZS4x9iK5Hb1pVMg/KjF/Ig4LNSdYLreBNngukGYugPEZoR3BQHAAA=`
    },
    {
      title: "Pairwise",
      description: "Generates consecutive pairs from a list.",
      tags: ["List"],
      template_data: `H4sIAAAAAAAA/+1WXU/bMBT9K5ElBGgZIkxMIhObNibYpGmapokXgiLXcVMLx47sG1hV5b/vOqTFTT9oV8rDxlNj+36cc+71dUekJzW7sSS+GhGRkfh+TcL2Nyb9SjFcUpOjEdoAL1pr/Gp2nFezCElGgY6tcHf0+Tz9/ulX/Obk+Dhkuii14gpsPEpIIRRnhvYhZpUFXaSKFjwh8S6e8d9gaOKSJIRpqQ1+Jxjb3KS54VwlJEwIoFWz/4MKcycsOtfXuC+ASsHwpE+l5b4hGuyGfmaM7FJeuZw9LTPP6SHt3QDJNBnnw8oNHU4DuuCKGwrcBiVCs0Hf6CKggRQWDhaB1L1+ZRk6+SAsGHHDYWB0lQ/mM8JVpTJuJJKauNa71zXKXSmIo1Bksc+5NMIW1OA6ZWZoEYdFTKSuQ2KlBhIf1mGntqVKufSK6yqF27qCsgLch2Hp1rfU4KKUlaFyjJXoEoRW3kbGLTOi2UWfS0RCe5IHoAPLwYNxsioMoaZQOJXXhvENnRyEvK2cVzgPUrSyNGzIJH/ApKrmbvA+rSSkt1RWfBKhPZv2P2yyLuQAppqhcOZSfsBQSkMTIjgNGsfgXRDht/PxuUQzXAZCgX+Fs/byNwkePI+OZzx7MgWae756jOrcIXBC4HFMvtrgi8gyrtw8Ya1JNkTSgnUnjpfwbY3t3MYmFQh5ULZXnjRQ5k0tbKb0viEfGVz3Rh39ZQPRMt22lOJLL8jcGOO+XBAlakhNVHAd+I2rHAaLORlecgp/SUmsQ2huU0ZT6Fdy2SkoDPZ2ENAeSrr/Otr36zqtQPCTqpwHHn1DGU4/F1UYzsCNnLIpTHutWj221APOItp+F6wWZXGEjooXHFwrXTYzZovKHD2/Mo91mNh/tay/nkMZN5c2F2Z5463aMsuL1BHnzOBN4k6fbUkz+bewmTjLFe4M1Y8lzousW/HZscKktnz1uSL6G+gw/mvwlLN4ivTpGhNUaVNsieeaT+i6LN8/Gct/55VYKvl//k5ELw/Dy8Ow6cPQGSQr2l/XfwBxgtweZREAAA==`
    },
    {
      title: "Compress Data",
      description: "Compresses data using gzip and base64 encoding.",
      tags: ["Compression"],
      template_data: `H4sIAAAAAAAA/91VS3PTMBD+Kxpx6MU0BEiHejyZ6YPwGKYcGnqpOxlZVhxRRTJ6ACbj/87KsVMlTVtaKMNwsne1j2+/3ZUWOBOKXhocny8wz3G8lHHUfmM8dZKCSHQBRmBj2by1hr9G470aIcI5saSzAu3ieDQ5ORzHL/YHg4iqeakkk9bEixTPuWRUk6mNqTNWzSeSzFmK4x04Y9+tJqlPkmKqhNLwn2LyxYEySrGF80ZzBBE1MwYdQ9oU1xdwyC0RnMLxlAjDQmsw2InCxBDYZzz3KTMl8sDpKuu3GdTSpN2OqtCk2o6KGURkhb4S4RhyhssCvfnBS1Dm6JAYtvdy9ybMKps6Q4llISZjNb9kdqaVK2bbCwTJyZxpATWuXOudixrId9LG/YjncUhByYF7CTBwXUfYCGVx/KyONppbygkTQXd9q0CtnC2dBb2tSi9/JRqEUjhNRAcPq9JyJQNFzgzVvNGCzxnRnGSCIauQYTaAsf+rMLhcQwGc3xuFnx+PgLatgwBSWR/toxQVIpSy0hqUaJYPT9w8Yzrp+f8IJX4qh6fQGlkkvUYAZU705aTQjMnhB2A46QUKpDRKngwGBwej0fCY0waYrpJepws46F/vxYxLGy5a3q5oU8mV5/PBNc9MTCwpAl/VlT/ynHgG4TjG7wx6y/OcSb/1tDXJK2Cb0817IUi4V8OYtbGxs1zsdmx6dnEDZ9v9Al2fLCfnjitmabTR/M9GeZyGqqb5fvBvHeWtQboJuiFKv6lsRcWZX+ixeu8zP1JVWWWZ+e2ybuemf48B+TQePX21GpCjGdF+VwNOlgswVoct8E0aHjiYY+2u5vKUF3CrPTDr3noP1z3/6S7eEWVjOP0L0z1A/1NdywfztaQqZ49V1+o9e+TC/uDeNfM7Vstx/mt7d4+sG3u37glnPwGr7O/GgAoAAA==`
    },
    {
      title: "Decompress Data",
      description: "Decompresses data that was compressed using gzip and base64 encoding.",
      tags: ["Compression"],
      template_data: `H4sIAAAAAAAA/91WS3PaMBD+Kx71wMXNlDakiY+EcR+HXkJziTOMbAmjRpY80ioNZfzfu7INGAJJSUun05O9q318u9+u7AVJpc7uLIluFkQwEjUyCdtnRKZOZShSk6MR2gAvWmt8qzXeqxZCwijQpRVqF6N48mU4jt5dDAZhpotSK67ARouEFELxzNApRJmzoIuJogVPSNTDM/4AhiY+SUIyLbXB94S8iuPR6fs4IWFCAE1q5Yj7sIZbG4wwd0KqWzwWQKXI0GBKpeVdezTohd3sGN2nvfF5Uy1Zx2md+vsMC6oT74aWGzrfh4vbgKp5cE+l44GzQuXBhx+iRCULhtTys9OTfah1OnU2o8C7qCwYccdhZrTLZ7tLRMkpxo3EKleuVe+2Qg6cgqgfChZtUOCpscCxmopUVUis1ECiN1W4RXOpJlx2ePakoVo7KB2gHuall++pQaGUzlC5REh0CUKrjoJxmxlRa9HnmhpBU8kD0IHl0IFx8aswhNpAAQ9wMIrLJWssqIOvUfQfd2MmFHSHnrXrUsdae74dPPJM5QRo3vHVSwCxR+VrwOOIfLLBR8EYV34Ds9aEzbFekW3vaCfhWYVct7GJAyFP2GoeR3VZ4Z5tx85PGvaeWfjGaIuAdA7cotpmumbAD+CT87QzypLGPVH6B3Tz6zh+fb7q5uWMGj9anV5e4TapfKyHLfLtPryQxbFxaxKvRI57+MKsDZV7PP9pGp+J0t8srLkK/bXJ+P9Ul7/r1x+DY1X2zWp1/ML+4N7V8zvWzTj/tb07IOvW3m16HonF1Wf093h8ehi25vMzGsdGF9f+/wT/Q6qfv6hNhBIKAAA=`
    }
  ];

function sortTemplatesByTags(
  templates: Array<{ title: string; description: string; tags: string[]; template_data: string; }>
) {
  return [...templates].sort((a, b) => {
    const tagA = a.tags[0]?.toLowerCase() || "";
    const tagB = b.tags[0]?.toLowerCase() || "";
    if (tagA < tagB) return -1;
    if (tagA > tagB) return 1;
    return a.title.localeCompare(b.title);
  });
}

const TemplateList: React.FC = () => {
  const [search, setSearch] = useState("");

  const filteredTemplates = sortTemplatesByTags(
    templates.filter(template =>
      template.title.toLowerCase().includes(search.toLowerCase()) ||
      template.description.toLowerCase().includes(search.toLowerCase()) ||
      template.tags.join(" ").toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="max-w-3xl mx-auto p-6 bg-[rgba(0,0,0,0.5)] h-full">
      	<Toaster
	position="bottom-right"
	reverseOrder={false}
	/>
  <div className="sticky top-0">
  <div className="flex items-center mb-6">
  <img
    src="https://soltrubeg.github.io/tqutils/icon.png"
    alt="Tq Utils Icon"
    className="w-16 h-16 mr-4"
    style={{ objectFit: "cover" }}
  />
  <div className="flex flex-col">
    <span className="text-3xl font-bold text-white leading-tight">Tq Utils</span>
    <span className="text-base text-stone-300 leading-tight">
      Utility Functions for your DiamondFire plots.
    </span>
  </div>
</div>
      <input
        type="text"
        placeholder="Search templates..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 mb-4 rounded-xl bg-zinc-800 text-white placeholder:text-stone-400 border-none shadow-lg focus:outline-none focus:ring-1 focus:ring-zinc-600 transition duration-200"
      />
      </div>

      <div className="overflow-y-scroll h-full pr-4">
        <div className="grid mt-4 gap-4">
        {filteredTemplates.length > 0 ? (
          filteredTemplates.map((template, index) => (
              <TemplateCard key={index} {...template} />
          ))
        ) : (
          null
        )}
        </div>
      </div>
    </div>
  );
};

export default TemplateList;